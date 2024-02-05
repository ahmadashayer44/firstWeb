<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css_files/favorite.css" />
    <script src="../js_files/favorite.js"></script>

</head>
<body>
<div class="boxForFavorite">
   <div id="movies" class="movies"></div>
   <input type="button" onclick="rightAScroll()" id="scrollRight" value=">" class="scrollRight"></input>
   <input type="button" onclick="leftAScroll()" id="scrollLeft" class="scrollLeft" value="<"></input>
   <input type="button" onclick="rightADoubleScroll2()" id="scrollRight" value=">>" class="scrollRight2"></input>
   <input type="button" onclick="leftADoubleScroll2()" id="scrollLeft" class="scrollLeft2" value="<<"></input>
   <input type="submit" value="Back" class="backButton" onclick=backToPage()>
</div>
</body>

<script>
    function backToPage()
    {
        window.location.href = "../html_files/showMenuForUsers.html";
    }
</script>






</html>