from flask import Flask, render_template, request, Response
import time
import requests

CAMERA_URL = 'http://192.168.124.50/240x240.jpg'
#se debe pasar el nombre del archivo
#se debe pasar el nombre de la carpeta de los templates
app = Flask(__name__, template_folder='./')

#devolviendo paginas html


@app.route('/video_feed')
def video_feed():
    def generate():
        while True:
            try:
                response = requests.get(CAMERA_URL, timeout=10)
                if response.status_code == 200:
                    yield (b'--frame\r\n'
                           b'Content-Type: image/jpeg\r\n\r\n' + response.content + b'\r\n')
                else:
                    print(f"Received status code: {response.status_code}")
                    time.sleep(1)
            except requests.RequestException as e:
                print(f"Error fetching image: {e}")
                time.sleep(3)

    return Response(generate(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port =5000,debug=True)