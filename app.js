let a = document.querySelectorAll(".key");
let s = "";
for (let i = 0; i < 20; i++) {
    a[i].addEventListener("click", () => {
        try {
            if (i == 0) s = "";
            else if (i == 1) {
                if (s.length) s = s.slice(0, -1);
            } else if (i == 2) s += "%";
            else if (i == 3) s += "/";
            else if (i == 4) s += "7";
            else if (i == 5) s += "8";
            else if (i == 6) s += "9";
            else if (i == 7) s += "*";
            else if (i == 8) s += "4";
            else if (i == 9) s += "5";
            else if (i == 10) s += "6";
            else if (i == 11) s += "-";
            else if (i == 12) s += "1";
            else if (i == 13) s += "2";
            else if (i == 14) s += "3";
            else if (i == 15) s += "+";
            else if (i == 16) s += "0";
            else if (i == 17) s += "00";
            else if (i == 18) s += ".";
            else if (i == 19) s = eval(s);

            document.querySelector(".screen").innerText = s;
        } catch (error) {
            // Handle the error and display an error message
            document.querySelector(".screen").innerText = "Invalid Syntax!";
        }
    });
    a[i].addEventListener("keydown", (event) => {
        let t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")", "+", "-", "*", "/", "%", ".", "Backspace", "Enter", "="];
        try {
            for (const p of t) {
                if (event.key === p) {
                    if (p == "Backspace") {
                        if (s.length) s = s.slice(0, -1);
                    } else if ((p === "Enter" && event.code === "Enter") || p === "=") {
                        try {
                            document.querySelector(".screen").innerText = "";
                            console.log(s);
                            s = eval(s);
                            console.log(s);
                        } catch (error) {
                            document.querySelector(".screen").innerText = "Invalid Syntax!";
                        }
                    } else s += p;
                }
            }
            document.querySelector(".screen").innerText = s;
        } catch (error) {
            // Handle the error and display an error message
            document.querySelector(".screen").innerText = "Invalid Syntax!";
        }
    });
    4387
}