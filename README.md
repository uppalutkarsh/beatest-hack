# beatest-hack

### Hand Raise Detection using OpenCV

#### Assumptions:
* Still Camera
* User should raise right fist to get the hand raise detected

#### Working:
* Uses palm cascade file to detect the landmarks of the fist
* The code runs indefinitely and prints unmute when a hand raise is detected
* Draws a rectange at the hand boundary to validate the detection
* Press 'q' to end the video capturing session and exit the infinite loop
