import cv2
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Load the pre-trained face detection model from OpenCV
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

video_capture = cv2.VideoCapture(0)  # Replace 1 with the index of your external webcam
if not video_capture.isOpened():
    print("Error: Could not open webcam.")
    exit()

# Load the reference image
reference_image = cv2.imread('hayden.jpg')

scale_factor = 0.2  # You can adjust this factor according to your needs
resized_image = cv2.resize(reference_image, None, fx=scale_factor, fy=scale_factor)
gray = cv2.cvtColor(resized_image, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

# Draw rectangles around the detected faces (considering the scale factor)
for (x, y, w, h) in faces:
    x = int(x / scale_factor)
    y = int(y / scale_factor)
    w = int(w / scale_factor)
    h = int(h / scale_factor)
    cv2.rectangle(reference_image, (x, y), (x+w, y+h), (255, 0, 0), 5)

cv2.namedWindow('Face Detection', cv2.WINDOW_NORMAL)
cv2.resizeWindow('Face Detection', 500, 500)

# Display the result
cv2.imshow('Face Detection', reference_image)

# Convert the reference image to grayscale
reference_gray = cv2.cvtColor(reference_image, cv2.COLOR_BGR2GRAY)

# Detect faces in the reference image
faces_reference = face_cascade.detectMultiScale(reference_gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

# Extract the face region from the reference image
if len(faces_reference) > 0:
    x_ref, y_ref, w_ref, h_ref = faces_reference[0]
    face_reference = reference_image[y_ref:y_ref+h_ref, x_ref:x_ref+w_ref]
else:
    print("No faces detected in the reference image.")
    exit()



while True:
    # Read a new frame
    ret, frame = video_capture.read()
    if not ret:
        break

    # Convert the frame to grayscale for face detection
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces using OpenCV
    faces_video = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

    for (x, y, w, h) in faces_video:
        # Extract the face region from the video frame
        face_video = frame[y:y+h, x:x+w]

        # Resize the reference face to match the size of the video face
        face_reference_resized = cv2.resize(face_reference, (w, h))

        # Compute the cosine similarity between the reference and video faces
        # You can use other similarity metrics depending on your needs
        similarity = cosine_similarity(
            face_reference_resized.flatten().reshape(1, -1),
            face_video.flatten().reshape(1, -1)
        )[0][0]

        # You can set a threshold to determine if the faces match
        threshold = 0.8

        # Draw bounding box and label on the frame
        if similarity > threshold:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
            cv2.putText(frame, f'Match: {similarity:.2f}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)
        else:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 0, 255), 2)
            cv2.putText(frame, f'No Match: {similarity:.2f}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 0, 255), 2)

    # Display the result
    cv2.imshow('Face Matching', frame)

    # Check if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the video capture object and close all windows
video_capture.release()
cv2.destroyAllWindows()
