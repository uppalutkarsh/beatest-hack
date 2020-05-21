
# coding: utf-8

# ## Hand Raise Detection using OpenCV
# 
# ### Assumptions:
# * Still Camera
# * User should raise right fist to get the hand raise detected
# 
# ### Working:
# * Uses palm cascade file to detect the landmarks of the fist
# * The code runs indefinitely and prints unmute when a hand raise is detected
# * Draws a rectange at the hand boundary to validate the detection
# * Press 'q' to end the video capturing session and exit the infinite loop


import cv2
import time


def find_hand(video_capture, palmCascade):
    
    """ Capture frame-by-frame """
    ret, frame = video_capture.read()

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    hand = palmCascade.detectMultiScale(
        gray,
        scaleFactor=1.1,
        minNeighbors=15,
        minSize=(30, 30),
        flags = cv2.CASCADE_SCALE_IMAGE
    )
    return hand, frame


def capture_hand(palmCascade):  

    hand, frame = find_hand(video_capture, palmCascade) 
    hand_flag = False
    
    """ Draw a rectangle around the hand """ 
    if len(hand) > 0:
        hand_flag = True
#         print('hand detected')
        for (x, y, w, h) in hand:
            cv2.rectangle(frame, (x , y), (x+w, y+h), (0, 255, 0), 2)

    """ Display the resulting frame """
    cv2.imshow('Video', frame)
    
    return hand_flag


""" Load the cascade xml file """
palmCascade= cv2.CascadeClassifier('palm_cascade.xml')

""" capture video indefinitely """
video_capture = cv2.VideoCapture(0)
while True:
    hand_flag = capture_hand(palmCascade)
    if hand_flag:
        """ Unmute if hand raise detected 
            Write the required code logic to mute / unmute here
        """
        print('Unmute')
    
    """ When everything is done, release the capture by pressing q """
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

""" Clear the memory """
video_capture.release()
cv2.destroyAllWindows()

