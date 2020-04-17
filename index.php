<!DOCTYPE html>
<html lang="en">
<div id="phpInteraction" style="display: none;">
<?php
  //Select a random background image.
  $background = array("chicago.jpg","duality.jpg","faceEye.jpg","japan.jpg","lanterns.jpg","Om.jpg","portal.jpg","skyMountain.jpg","skyWhale.jpg","tunnel.jpg","skyLand.jpg");
  $selImg = rand(0,count($background)-1);
  $currbg = "$background[$selImg]";

  //Connect to Database
  require '../tmp/db.php';

  function console_log($output, $with_script_tags = true)
  {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .');';

    if ($with_script_tags)
    {
        $js_code = '<script>' . $js_code . '</script>';
    }

    echo $js_code;
  }

  foreach ($allData as &$line) {
    $count = 1;
    foreach ($line as &$val) {
      if ($count % 2) {
        $semiprint = $val.",";
        if ($count == 13) {
          $semiprint = $val."|";
        }
        echo $semiprint;
      }
      $count++;
    }
  }
?>
</div>
<head>
  <title>Avoiding Responsibilities Usage Stats</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="author" content="Aditya K. Menon">

  <!--Bootstrap import-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <!--Background Image-->
  <style type="text/css">
    body{
      /*TODO: Keep in php version*/
      /*background: url(images/<?php echo $currbg; ?>) no-repeat;*/
      background: url(images/japan.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-attachment: fixed;
    }
  </style>

  <!--Chart.js is imported here. Moment.js is installed along Chart.js as dependency.-->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm">

      </div>
      <div class="col-7" style="background-color: rgba(12, 70, 157, 0.74);">
        <canvas id="Graph"></canvas>
        <script src="DrawChart.js"></script>
      </div>
      <div class="col-sm">

      </div>
    </div>
  </div>
  <!--Self made scripts-->

  <!--Bootstrap scripts-->
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

</body>
</html>