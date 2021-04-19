# europe_version

<h2>Vocational maturity – an interactive online tool for self-evaluation vs. 29th March</h2>

<p>The interactive online tool for NEETs´ self-evaluation of vocational maturity was developed in a cross-national and cross-professional process in the framework of the European KA2 project “Youth in transition” (October 2018 – March 2021).</p>
<p>The purpose of the tool is to support young people and especially NEETs in their process of identifying areas of strengths, potentials, competences and needs regarding their work with vocational maturity. </p>
<p>The development process of the tool has been research-based and quality-assured by researchers from Hamburg University. </p><p>The development process was cross-sectoral and the finalization was undertaken together with NEETs. The tool was tested broadly and in-depth as country versions in national languages in Denmark, Slovenia and Iceland (Aug. 2019 – Oct. 2020).  NEETs as well as professionals were the test persons. The validity of the tool has been outlined, based on proven pedagogical conclusions and recommendations for the application of the tool in its given practice. 
So far, in March 2021, the tool is elaborated and implemented as quality-assured versions in Denmark, Slovenia and Iceland.</p> <p> A German version is under construction. A generic version in English communicates the content and principles but is not meant for implementation in practice. 
Read more and access to the tool</p>

<p>It is possible to transfer the tool to other practices, such as to another country or to another host within the same country. For technical specifications and conditions, see below.
Pls. be aware of that there are differences between the national versions. Not many, but the differences are chosen very consciously depending on local circumstances, such as cultural influences and specific target groups. 
Immaterial rights</p>
<p>The Association and interest organization for local governments Denmark, dep. EUK/KL, holds the immaterial rights for the codes of the tool, and together with the Danish consultancy firm Moeve aps holding the immaterial rights for the concept of the tool and its visual design. 
All in all, the work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.
Conditions for transfer to other contexts</p>
<p>The transfer of the tool to new independent versions in other contexts cannot be claimed. Naturally, the holders of the immaterial rights are open to support a transfer if the intended new version can match the overall goals and principles of the tool. 
Thus, a transfer is conditioned by the following: </p>

a)	A new version must match the purpose with the tool as a process-supportive self-evaluation tool for the vocational maturity of NEETs,   to be undertaken in dialogue with relevant professionals. <br/>
b)	The adaptation process must be quality-assured; first and foremost by involving users in the adaptation process.</br>
c)	The probability of an ethical use of the tool must be documented. <br/>
d)	Loyalty to the pedagogical approaches and principles of the tool is needed (see also guideline) and must be documented. <br/>
e)	Commercialization must not be undertaken; also the new version of the tool must be freely and easily accessible for interested users. <br/>
f)	In principle, a transfer will be free of charge for the receiving organization, if the above-mentioned conditions can be met and if     the Danish support can be kept on a minimal level. If more extensive resources are necessary to support the transfer, an agreement on a     reasonable fee will be made. <br/>

<h2>Technology </h2>
<li>The tool is programmed in Java Script and HTML 5. </li>
<li>Input storage is only undertaken in browser sessions (session storage, no database). </li>
<li>Data arase proceeds in 1 file. Only few manual adaptations to the architecture are necessary. </li>
<li>The dialogue with the Danish programmer and code sharing takes preferably place via GitHub. </li>
<li>For new language versions, the local programmers will exchange the texts themselves and adjust functionalities (if desirable) by themselves. </li>

<h2>Overall functionality</h2>

</p>The input data is stored by the sessionStorage object also handled by the browser. </p>
<p>When the browser session is closed, the data will be erased. This is intended and a part of the design.</p>
<p>The user can download a PDF print of the results to keep.</p> 

The two main files are 
    index.html and resultInsert.html

<h3>Insert the text for the questions</h3>

The data for the questions is inserted in the file 
    QuestionsDataModel.js. 
Earch parameter has an array  off objects that handles all the subquestions and the results. 
The name of the arrays are questionArray, questionArray2.. and so on. Here you can add the text for the questions.

<h3>insert the textlabels for the parameters</h3>

You have to insert the text for the parameterlabels a couple of times. 
The labeltext is added in the file called Label.js, PrintToPDF.js and the file Result.js

<h3>The textlabels for the profiles</h3>

You will find the text for the Profiles in the View.js, printToPdf.js.

<h3>Text for the taxamonies</h3>

Is found I  View.js, QuestionsDataModel.js, RangeSlider.js

<h3>About text</h3>

Is found in the two main files

