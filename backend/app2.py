from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
import pandas as pd
import pickle
import json
import numpy as np


app = Flask(__name__)
# CORS(app)
cors = CORS(app, resource={
    r"/*":{
        "origins":"http://localhost:3000"
    }
})

scoremodel = pickle.load(open('score.pkl','rb'))

class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        if isinstance(obj, np.floating):
            return float(obj)
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        elif isinstance(obj, np.bool_):             
            return bool(obj)
        return super(NpEncoder, self).default(obj)
    



@app.route('/api/predictscore', methods=['POST'])
@cross_origin()
def predictscore():
    json_ = [request.json]
    df = pd.DataFrame(json_)
    data = df.to_numpy()
    predictscore = scoremodel.predict(data.reshape(1,5), batch_size=1)
    ans = predictscore[0][0]*100
    if ans>=100:
        ans = 100
    else:
        ans = ans
    ans = json.dumps(ans, cls=NpEncoder)
    return jsonify({'Prediction': (ans)})


@app.route('/api/userinfo', methods=['POST'])
@cross_origin()
def userinfo():
    json_ = [request.json]
    df = pd.DataFrame(json_)
    ans = {1,2,3,4,5}   
    # data = df.to_numpy()
    # predictscore = scoremodel.predict(data.reshape(1,5), batch_size=1)
    # ans = predictscore[0][0]*100
    # if ans>=100:
    #     ans = 100
    # else:
    #     ans = ans
    # ans = 1
    ans = json.dumps(ans, cls=NpEncoder)
    return jsonify({(ans)})
    # return ans


if __name__ == "__main__":
    app.run(debug=True)