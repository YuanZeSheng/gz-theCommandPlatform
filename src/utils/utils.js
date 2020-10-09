let Tools = {
    enterFullScreen() {
        let el = document.documentElement
        let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
        if (rfs) { // typeof rfs != "undefined" && rfs
            rfs.call(el)
        } else if (typeof window.ActiveXObject !== 'undefined') {
            // for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
            let wscript = new ActiveXObject('WScript.Shell')
            if (wscript != null) {
                wscript.SendKeys('{F11}')
            }
        }
    },

    enterScrenn() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

export default Tools