from flask import Flask, request
from flask_cors import CORS,  cross_origin
import json
from face_rec import FaceRec, your_name
from PIL import Image
import base64
import io
import os
import shutil
import time


app = Flask(__name__)
# CORS(app)
cors = CORS(app, resource={
    r"/*":{
        "origins":"http://localhost:3000"
    }
})


@app.route('/api', methods=['POST', 'GET'])
@cross_origin()
def api():
	data = request.get_json()
	print(data)
	resp = 'Nobody'
	directory = './stranger'
	if data['data']:
		# print(1)
		if os.path.exists(directory):
			shutil.rmtree(directory)

		if not os.path.exists(directory):
			try:
				os.mkdir(directory)
				time.sleep(1)
				result = data['data']
				b = bytes(result, 'utf-8')
				image = b[b.find(b'/9'):]
				im = Image.open(io.BytesIO(base64.b64decode(image)))
				im.save(directory+'/stranger.jpeg')
				# print(im)
				print(your_name.recognize_faces())
				if your_name.recognize_faces() == 'your_name':
					# print(2)
					resp = 'Verified'
				else:
					# print(3)
					resp = 'Not Verified'
			except:
				pass
	return resp


if __name__ == '__main__':
	app.run()