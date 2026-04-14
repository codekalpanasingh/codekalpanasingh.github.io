function header(){
    document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="header bg4">
            <h1> CMS</h1>
    </div>`);
}

function navigation(){
    document.write(`<div class="nav bg1"> 
        <ul>
            <li><a href="index.html" rel="noopener noreferrer">Home</a></li>
            <li><a href="page1.html " rel="noopener noreferrer">Page1</a></li>
            <li><a href="page2.html " rel="noopener noreferrer">Page2</a></li>
            <li><a href="page3.html " rel="noopener noreferrer">Page3</a></li>
            <li><a href="page4.html" rel="noopener noreferrer">Page4</a></li>
        </ul>
    </div>`)
    document.writeln( `<div class="article bg2 fl"> `);
}


function article(){ 
    document.writeln(`
        <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eaque!</h2>
        <hr>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut placeat tempore aliquam esse, nihil, fugiat sunt eum libero iste itaque unde inventore debitis. Veniam minima voluptatem ab possimus, blanditiis dolore incidunt necessitatibus, velit vitae a sint praesentium voluptate! Minus dolores reprehenderit porro provident, totam asperiores illum alias commodi saepe ratione fugit ad adipisci fugiat, libero esse eos, earum repudiandae autem iusto maxime! Expedita sapiente laboriosam sint! Recusandae impedit similique vel explicabo quae saepe eius beatae ut porro laborum laboriosam nemo assumenda deleniti, maxime corrupti iste ratione voluptatum dolorum facere aut molestias? Cupiditate quisquam ipsa, optio corporis similique eaque iure vero.</p>
    </div>`)
}


function aside(){
    document.write(` <div class="aside bg3 newfl"> 
        <marquee behavior="" direction=""><h2> Lorem, ipsum dolor.
        </h2></marquee> 
        <hr> 
    </div>`)
}
