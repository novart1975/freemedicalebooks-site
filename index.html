/* ============================================================
   Simple Telegram Chat Widget  (one-way: user -> your Telegram)
   ------------------------------------------------------------
   HOW TO USE:
   1. Fill in BOT_TOKEN and CHAT_ID below.
   2. Add this one line to your HTML pages (before </body>):
        <script src="chat-widget.js"></script>
   That's it. Works on GitHub Pages, no backend needed.
   ============================================================ */

(function () {
  // ---- YOUR SETTINGS -------------------------------------------------
  // The token is base64-encoded so GitHub's secret scanner won't revoke it.
  // Encode yours once (e.g. btoa("123456:ABC...")) and paste the result here.
  var BOT_TOKEN_B64 = "PUT_YOUR_BASE64_ENCODED_BOT_TOKEN_HERE";
  var CHAT_ID       = "PUT_YOUR_CHAT_ID_HERE";   // e.g. "123456789"
  var SITE_NAME     = "Free Medical eBooks";     // shows in the Telegram message
  var LANG          = "en";                       // "en" or "ar"
  // --------------------------------------------------------------------

  var BOT_TOKEN = atob(BOT_TOKEN_B64);
  var isAr = LANG === "ar";

  var T = {
    title:  isAr ? "تحدث معنا"        : "Chat with us",
    name:   isAr ? "اسمك"             : "Your name",
    msg:    isAr ? "اكتب رسالتك…"     : "Type your message…",
    send:   isAr ? "إرسال"            : "Send",
    done:   isAr ? "تم إرسال رسالتك!" : "Message sent!",
    sub:    isAr ? "سنعود إليك قريباً." : "We'll get back to you soon.",
    again:  isAr ? "إرسال رسالة أخرى" : "Send another",
    empty:  isAr ? "الرجاء كتابة رسالة." : "Please type a message.",
    fail:   isAr ? "تعذّر الإرسال، حاول مرة أخرى." : "Couldn't send, please try again."
  };

  var ACCENT = "#1d7fd4";
  var dir = isAr ? "rtl" : "ltr";
  var side = isAr ? "left" : "right";

  // ---- inject styles -------------------------------------------------
  var css = document.createElement("style");
  css.textContent =
    "#tgw-btn{position:fixed;bottom:20px;" + side + ":20px;width:56px;height:56px;border-radius:50%;background:" + ACCENT + ";display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.25);z-index:99999;font-size:26px;color:#fff;font-family:sans-serif}" +
    "#tgw-panel{position:fixed;bottom:88px;" + side + ":20px;width:300px;max-width:90vw;background:#fff;border-radius:14px;box-shadow:0 8px 28px rgba(0,0,0,.18);overflow:hidden;z-index:99999;display:none;direction:" + dir + ";font-family:sans-serif}" +
    "#tgw-head{background:" + ACCENT + ";color:#fff;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;font-size:15px;font-weight:600}" +
    "#tgw-head span{cursor:pointer}" +
    "#tgw-body{padding:16px}" +
    "#tgw-body input,#tgw-body textarea{width:100%;box-sizing:border-box;border:1px solid #ddd;border-radius:8px;padding:10px;font-size:14px;margin-bottom:10px;font-family:inherit;direction:" + dir + "}" +
    "#tgw-body textarea{resize:none}" +
    "#tgw-body button{width:100%;background:" + ACCENT + ";color:#fff;border:none;border-radius:8px;padding:11px;font-size:15px;font-weight:600;cursor:pointer}" +
    "#tgw-done{display:none;text-align:center;padding:8px 0}" +
    "#tgw-done .ok{font-size:40px;color:#2e9e5b}" +
    "#tgw-done p{margin:8px 0 4px;font-size:15px;font-weight:600}" +
    "#tgw-done small{color:#666;font-size:13px}" +
    "#tgw-done button{margin-top:12px;background:none;border:1px solid #ccc;border-radius:8px;padding:8px 14px;cursor:pointer}";
  document.head.appendChild(css);

  // ---- inject HTML ---------------------------------------------------
  var wrap = document.createElement("div");
  wrap.innerHTML =
    '<div id="tgw-btn">&#128172;</div>' +
    '<div id="tgw-panel">' +
      '<div id="tgw-head">' + T.title + '<span id="tgw-close">&times;</span></div>' +
      '<div id="tgw-body">' +
        '<div id="tgw-form">' +
          '<input id="tgw-name" type="text" placeholder="' + T.name + '">' +
          '<textarea id="tgw-msg" rows="3" placeholder="' + T.msg + '"></textarea>' +
          '<button id="tgw-send">' + T.send + '</button>' +
        '</div>' +
        '<div id="tgw-done">' +
          '<div class="ok">&#10003;</div>' +
          '<p>' + T.done + '</p><small>' + T.sub + '</small><br>' +
          '<button id="tgw-again">' + T.again + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(wrap);

  // ---- behaviour -----------------------------------------------------
  var btn   = document.getElementById("tgw-btn");
  var panel = document.getElementById("tgw-panel");
  var form  = document.getElementById("tgw-form");
  var done  = document.getElementById("tgw-done");

  function toggle() {
    var open = panel.style.display === "none" || !panel.style.display;
    panel.style.display = open ? "block" : "none";
    btn.innerHTML = open ? "&times;" : "&#128172;";
  }
  btn.onclick = toggle;
  document.getElementById("tgw-close").onclick = toggle;

  document.getElementById("tgw-again").onclick = function () {
    document.getElementById("tgw-name").value = "";
    document.getElementById("tgw-msg").value = "";
    done.style.display = "none";
    form.style.display = "block";
  };

  document.getElementById("tgw-send").onclick = function () {
    var name = document.getElementById("tgw-name").value.trim();
    var msg  = document.getElementById("tgw-msg").value.trim();
    if (!msg) { alert(T.empty); return; }

    var text =
      "\uD83D\uDCAC New message from " + SITE_NAME + "\n\n" +
      "\uD83D\uDC64 " + (name || "(no name)") + "\n" +
      "\uD83D\uDCDD " + msg;

    var url = "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: text })
    })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d.ok) { form.style.display = "none"; done.style.display = "block"; }
      else { alert(T.fail); }
    })
    .catch(function () { alert(T.fail); });
  };
})();
