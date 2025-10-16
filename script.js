

function scrollProgress() {
                let scrollTop = document.documentElement.scrollTop;
                let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                let scrolled = (scrollTop / height) * 100;
                document.getElementById("progress-bar").style.width = scrolled + "%";
            }
