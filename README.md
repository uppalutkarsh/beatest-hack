# beatest-hack

### Hand Raise Detection using OpenCV

#### Assumptions:
* Still Camera
* User should raise right fist to get the hand raise detected

#### Requirements:
* run ```pip install -r requirements.txt``` This will install all the requirements required to run the project.

#### Working:
* Uses palm cascade file to detect the landmarks of the fist
* The code runs indefinitely and prints unmute when a hand raise is detected
* Draws a rectange at the hand boundary to validate the detection
* Press 'q' to end the video capturing session and exit the infinite loop

#### Running the Project:
* Open terminal in the project folder
* Run ```flask run```
* This will run the project in debug mode
* Open http://127.0.0.1:5000/ to view the Web page
