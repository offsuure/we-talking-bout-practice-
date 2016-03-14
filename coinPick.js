var totalCoins=Math.floor((Math.random() * 30) + 4);
        alert("Total coins are "+totalCoins);
        var res = document.getElementById('result');
        var p1=document.getElementById('player1');
        var p2 = document.getElementById('player2');
        p1.focus = true;
        function p1Validation() {
            
            if (p1.readOnly) {
                return false;
            }
            if (p1.value > 3 && p1.value < 1) {
                res.innerHTML = "Enter value between 1 and 3";
                return false;
            }
            p1.readOnly = true;
            p2.readOnly = false;
            p2.focus = true;
            totalCoins -= p1.value;
            if (totalCoins<1) {
                res.innerHTML = "<b>Result : </b>Congratulations, player 2, you won!";
                return false;
            }
            alert("Total coins left "+totalCoins);
            document.getElementById('turnMsg').innerHTML = "Player 2 turn";
            return true;
        }
        function p2Validation() {
            if (p2.readOnly) {
                return false;
            }
            if (p2.value > 3 && p2.value < 1) {
                res.innerHTML = "Enter value between 1 and 3";
                return false;
            }
            p2.readOnly = true;
            p1.readOnly = false;
            p1.focus = true;
            totalCoins -= p2.value;
            if (totalCoins < 1) {
                res.innerHTML = "<b>Result : </b>Congratulations, player 1, you won!";
                return false;
            }
            alert("Total coins left " + totalCoins);
            document.getElementById('turnMsg').innerHTML = "Player 1 turn";

            return true;
        }
