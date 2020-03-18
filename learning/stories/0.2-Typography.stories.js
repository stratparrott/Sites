import React from 'react';


export default { title: 'Typography', };

export const Typography = () =>
    <div className="information">
        <h1>Typography</h1>
        <br />
        <div>
            <span>Montserrat Regular 400</span>
        </div>
        {/* Base type size */}
        <div> <p>The base type is 16px over 1.75 line height (24px)</p></div>

        <ol style={{ "display": "inline-block" }}>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "100", "fontSize": "20px", "lineHeight": "1.75rem" }}>Thin</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "100", "fontSize": "20px", "fontStyle": "italic", "lineHeight": "1.75rem" }}>Thin Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "200", "fontSize": "20px", "lineHeight": "1.75rem" }}>Extra-Light</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "200", "fontSize": "20px", "fontStyle": "italic", "lineHeight": "1.75rem" }}>Extra-Light Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "300", "fontSize": "20px", "lineHeight": "1.75rem" }}>Light</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "300", "fontSize": "20px", "fontStyle": "italic", "lineHeight": "1.75rem" }}>Light Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "400", "fontSize": "20px", "lineHeight": "1.75rem" }}>Regular</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "400", "fontSize": "20px", "fontStyle": "italic", "lineHeight": "1.75rem" }}>Regular Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "500", "fontSize": "20px", "lineHeight": "1.75rem" }}>Medium</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "500", "fontSize": "20px", "lineHeight": "1.75rem" }}>Medium Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "600", "fontSize": "20px", "lineHeight": "1.75rem" }}>Semi-Bold</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "600", "fontSize": "20px", "lineHeight": "1.75rem" }}>Semi-Bold Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "700", "fontSize": "20px", "lineHeight": "1.75rem" }}>Bold</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "700", "fontSize": "20px", "lineHeight": "1.75rem" }}>Bold Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "800", "fontSize": "20px", "lineHeight": "1.75rem" }}>Extra-Bold</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "800", "fontSize": "20px", "lineHeight": "1.75rem" }}>Extra-Bold Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "900", "fontSize": "20px", "lineHeight": "1.75rem" }}>Black</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "900", "fontSize": "20px", "lineHeight": "1.75rem" }}>Black Italic</li>
        </ol>

        <ol style={{ "background": "black", "color": "white", "display": "inline-block" }}>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "100", "fontSize": "20px", "lineHeight": "1.75rem" }}>Thin</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "100", "fontSize": "20px", "fontStyle": "italic", "lineHeight": "1.75rem" }}>Thin Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "200", "fontSize": "20px", "lineHeight": "1.75rem" }}>Extra-Light</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "200", "fontSize": "20px", "fontStyle": "italic", "lineHeight": "1.75rem" }}>Extra-Light Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "300", "fontSize": "20px", "lineHeight": "1.75rem" }}>Light</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "300", "fontSize": "20px", "fontStyle": "italic", "lineHeight": "1.75rem" }}>Light Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "400", "fontSize": "20px", "lineHeight": "1.75rem" }}>Regular</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "400", "fontSize": "20px", "fontStyle": "italic", "lineHeight": "1.75rem" }}>Regular Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "500", "fontSize": "20px", "lineHeight": "1.75rem" }}>Medium</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "500", "fontSize": "20px", "lineHeight": "1.75rem" }}>Medium Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "600", "fontSize": "20px", "lineHeight": "1.75rem" }}>Semi-Bold</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "600", "fontSize": "20px", "lineHeight": "1.75rem" }}>Semi-Bold Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "700", "fontSize": "20px", "lineHeight": "1.75rem" }}>Bold</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "700", "fontSize": "20px", "lineHeight": "1.75rem" }}>Bold Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "800", "fontSize": "20px", "lineHeight": "1.75rem" }}>Extra-Bold</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "800", "fontSize": "20px", "lineHeight": "1.75rem" }}>Extra-Bold Italic</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "900", "fontSize": "20px", "lineHeight": "1.75rem" }}>Black</li>
            <li style={{ "fontFamily": "'Montserrat'", "fontWeight": "900", "fontSize": "20px", "lineHeight": "1.75rem" }}>Black Italic</li>
        </ol>

        {/* Other styled text tags */}
        < strong > Bolded</strong >
        <em>Italicized</em>
        <a href="*">Colored</a>
        <u>Underlined</u>

        <br />
        <br />
        <br />
        {/*Standard Headings */}

        <h1>Heading h1</h1>
        <div><p>Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.</p></div>
        <h2>Heading h2</h2>
        <div><p>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p></div>
        <h3>Heading h3</h3>
        <div><p>The base type is 16px over 1.75 line height (24px)</p></div>
        <h4>Heading h4</h4>
        <div><p>The base type is 16px over 1.75 line height (24px)</p></div>
        <h5>Heading h5</h5>
        <div><p>The base type is 16px over 1.75 line height (24px)</p></div>
        <h6>Heading h6</h6>
        <div><p>The base type is 16px over 1.75 line height (24px)</p></div>


    </div >
    ;