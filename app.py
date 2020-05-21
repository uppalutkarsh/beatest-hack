from flask import Flask, render_template, Response, request, jsonify, flash
import cv2
from handDetect import capture_hand

app = Flask(__name__)
app.secret_key = 'dont tell anyone'

video_camera = None
global_frame = None
record = False
palmCascade = cv2.CascadeClassifier('palm_cascade.xml')
message = 'Not allowed to speak yet'


@app.route('/')
def hello_world():
    global message
    return render_template('index.html')


def create_message():
    global message
    yield message


@app.route('/my_message')
def my_message():
    return Response(create_message())


def generate_frame():
    global video_camera
    global global_frame
    global record
    global palmCascade
    global message
    record = not record
    if video_camera is None and record is True:
        video_camera = cv2.VideoCapture(0)
    while record is True:
        # get camera frame
        # ret, frame = video_camera.read()
        hand_flag, frame = capture_hand(video_capture=video_camera, palmCascade=palmCascade)
        if frame is not None:
            # frame = cv2.flip(frame, 1)
            ret, frame = cv2.imencode('.jpg', frame)
            frame = frame.tobytes()
            global_frame = frame
            # flash(message)
            yield b'--frame\r\n' + b'Content-Type: image/jpeg\r\n\r\n' + global_frame + b'\r\n\r\n'
        else:
            yield b'--frame\r\n' + b'Content-Type: image/jpeg\r\n\r\n' + global_frame + b'\r\n\r\n'
        # if hand_flag:
            # video_camera.release()


@app.route('/record_status', methods=['POST'])
def record_status():
    global video_camera
    json = request.get_json()

    status = json['status']

    if status == "true":
        video_camera = cv2.VideoCapture(0)
        return jsonify(result="started")
    else:
        video_camera.release()
        return jsonify(result="stopped")


@app.route('/video_feed')
def video_feed():
    return Response(generate_frame(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run()
