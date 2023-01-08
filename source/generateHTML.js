//Generating Manager Information

const finalHTML = (
  finalmanagerMembers,
  finalengineerMembers,
  finalinternMembers
) => {
  //validate info collect and store
  //console.log("this is the team:",finalTeamMembers) ;
  return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/css2?family=Alkalami&family=Dancing+Script:wght@500&family=Noto+Sans+Mono:wght@100&family=Sono&family=Syne:wght@800&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../dist/style.css">
            <title> MY TEAM </title>
        </head>
        <body>
            <!-- Container for page content -->
            <div class="container-fluid ">
                <!-- Title bar -->
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center p-3 mb-2 bg-primary text-white">MY TEAM </h1>
                    </div>
                </div>
            <!-- Page content - Employee's Cards-->
            <div class="row justify-content-center container d-sm-flex">
            <!--     <div class="row justify-content-center"> -->
          
                    ${finalmanagerMembers},  
                    ${finalengineerMembers},  
                    ${finalinternMembers},   

                 
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        </body>
        </html>`;
};
module.exports = finalHTML;
