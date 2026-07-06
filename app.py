from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

USERNAME = "agent007"
PASSWORD = "escape123"

@app.route("/", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        username = request.form["username"]
        password = request.form["password"]

        if username == USERNAME and password == PASSWORD:
            return redirect(url_for("mission"))

        return render_template("index.html", error="Access Denied!")

    return render_template("index.html")


@app.route("/mission")
def mission():
    return render_template("mission.html")


@app.route("/mission2")
def mission2():
    return render_template("mission2.html")


@app.route("/mission3")
def mission3():
    return render_template("mission3.html")


@app.route("/mission4")
def mission4():
    return render_template("mission4.html")


@app.route("/mission5")
def mission5():
    return render_template("mission5.html")


@app.route("/mission6")
def mission6():
    return render_template("mission6.html")

@app.route("/mission7")
def mission7():
    return render_template("mission7.html")


@app.route("/mission8")
def mission8():
    return render_template("mission8.html")

@app.route("/mission9")
def mission9():
    return render_template("mission9.html")


@app.route("/mission9_console")
def mission9_console():
    return render_template("mission9_console.html")

@app.route("/mission10")
def mission10():
    return render_template("mission10.html")

@app.route("/scoreboard")
def scoreboard():
    return render_template("scoreboard.html")
    
print(app.url_map)

if __name__ == "__main__":
    app.run(debug=True)