from flask import Flask, request
from flask_cors import CORS,  cross_origin
import json
from rec import name
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