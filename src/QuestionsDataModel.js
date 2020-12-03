function toZeroArray(values){
   var arr = [];
   if(values === undefined ){
    arr = [0,0,0,0,0,0];
    return arr;
 }
  else {
   
   return  values.split(",");}
 }
 /******Creating comment array for the PDF version *********/
 let commentsArrProf1 = [];
 let commentsArrProf2 = [];
 let commentsArrProf3 = [];
 for(var i = 1; i < 7; i++) {
   let comment = sessionStorage.getItem('comment'+i+"profile1");
      commentsArrProf1.push(comment);
 }
 for(var i = 1; i < 7; i++) {
   let comment = sessionStorage.getItem('comment'+i+"profile2");
      commentsArrProf2.push(comment);
}
for(var i = 1; i < 7; i++) {
   let comment = sessionStorage.getItem('comment'+i+"profile3");
   commentsArrProf3.push(comment);
}
/**************End comment array for PDF version *********/

var values_profile1 = {
    "val1" : toZeroArray(sessionStorage.values1id1),
    "val2" : toZeroArray(sessionStorage.values2id1),
    "val3" : toZeroArray(sessionStorage.values3id1),
    "val4" : toZeroArray(sessionStorage.values4id1),
    "val5" : toZeroArray(sessionStorage.values5id1),
    "val6" : toZeroArray(sessionStorage.values6id1),  
 };
 
 var values_profile2 = {
    "val1" : toZeroArray(sessionStorage.values1id2),
    "val2" : toZeroArray(sessionStorage.values2id2),
    "val3" : toZeroArray(sessionStorage.values3id2),
    "val4" : toZeroArray(sessionStorage.values4id2),
    "val5" : toZeroArray(sessionStorage.values5id2),
    "val6" : toZeroArray(sessionStorage.values6id2),
    
 };
 
 var values_profile3 = {
    "val1" : toZeroArray(sessionStorage.values1id3),
    "val2" : toZeroArray(sessionStorage.values2id3),
    "val3" : toZeroArray(sessionStorage.values3id3),
    "val4" : toZeroArray(sessionStorage.values4id3),
    "val5" : toZeroArray(sessionStorage.values5id3),
    "val6" : toZeroArray(sessionStorage.values6id3),
    
 };
 var inputvalue = {
   'values1' : values_profile1,
   'values2' : values_profile2,
   'values3' : values_profile3
 };
 
 //Question 1


 
 // initializes the instructions variables
 let comment1_1 = "",comment1_2 = " ", comment1_3 = " ", 
 comment1_4 = " ", comment1_5 ="";
 let comment2_1 = "",comment2_2 = " ", comment2_3 = " ", 
 comment2_4 = " ", comment2_5 ="";
 let comment3_1 = "",comment3_2 = " ", comment3_3 = " ", 
 comment3_4 = " ", comment3_5 ="";
 let comment4_1 = "",comment4_2 = " ", comment4_3 = " ", 
 comment4_4 = " ", comment4_5 ="";
 let comment5_1 = "",comment5_2 = " ", comment5_3 = " ", 
 comment5_4 = " ", comment5_5 ="",comment5_6 ="" ;
 let comment6_1 = "",comment6_2 = " ", comment6_3 = " ", 
 comment6_4 = " ", comment6_5 ="";
 
questionArray = [];
profile_array = [];

for(var key in inputvalue){
   questionArray = [];
   /*if(key == 'values3') {
      // instructions to question M?ls?tning
      comment1_1 = "At turde t?nke nyt, at dr?mme og s?tte m?l ";
      comment1_2 = "G?lder ogs? mindre beslutninger som fx at m?de ind om morgenen ";
      comment1_3 = "G?lder mindre og st?rre valg ";
      comment1_4 = "P? sigt ogs? fokus p? en uddannelsesplan eller en plan for at f? et arbejde ";
      comment1_5 ="Omhandler valg der bringer den unge n?rmere sine m?l";
     // Instructions to Motivation
      comment2_1 = "Udholdenhed, disciplin";
      comment2_2 = "V?re p?lidelig, g?re det der er aftalt";
      comment2_3 = "Levere det aftalte hhv. s?ge aktivt efter l?sninger, ogs? hvis der opst?r problemer ";
      comment2_4 = "G?lder alle livets omr?der"; comment2_5 ="Komme til tiden, komme hver dag eller hver gang, overholde m?deaftaler og v?re mentalt til stede";
      // Instructions to Robusthed
      comment3_1 = "Vedholdenhed, arbejde med frustrationer";
      comment3_2 = "Se de muligheder der kan bringe den unge videre";
      comment3_3 = "Konstruktive relationer, gode f?llesskaber, underst?ttende p? vejen mod m?let ";
      comment3_4 = "R?kke ud efter st?tte ved problemer eller for at komme videre"; comment3_5 ="Forholde sig til sagen, forblive ”p? egen banehalvdel”";
      // Instructions to Fleksibilitet
      comment4_1 = "Identificere problemet eller muligheden og tage initiativ";
      comment4_2 = "Generelt, ikke ubetinget tilpasning i enhver situation";
      comment4_3 = "Ogs? efter ordre eller pga. udefrakommende omst?ndigheder";
      comment4_4 = "Reflektere over alternativer og afklare omst?ndigheder for ?ndringer"; comment4_5 ="N?r n?dvendigt eller ?nskv?rdigt. I praktikcentre: EMMA-kriteriet ”geografisk mobilitet”";
        // Instructions to Sociale normer
      comment5_1 = "OBS g?lder ikke ved destruktive forhold p? arbejdspladsen";
      comment5_2 = "OBS g?lder ikke ved destruktive forhold p? arbejdspladsen";
      comment5_3 = "I bred forstand og samtidig v?re opm?rksom p? eget st?sted";
      comment5_4 = "I bred forstand og under hensyntagen til egne gr?nser"; comment5_5 ="Omhandler konflikth?ndtering i bred forstand";
      comment5_6 ="Reflektere over forhold p? arbejdspladsen";
        // Instructions to Min faglighed
      comment6_1 = "Den forn?dne faglighed p? det givne niveau. I praktikcentre: EMMA-kriteriet ”Fagligt egnet”";
      comment6_2 = "Kontekstafh?ngig: forts?tte p? den faglige vej, ikke falde fra, ”faglig stabilitet”";
      comment6_3 = "Kontekstafh?ngig: faglig nysgerrighed, lysten til at l?re, efter- og videreuddannelse";
      comment6_4 = "Kontekstafh?ngig: at kunne skifte spor. I praktikcentre: EMMA-kriteriet ”Faglig mobilitet” "; 
      comment6_5 = "Fx fritidsjob, job, praktik eller arbejdsopgaver. I praktikcentre: EMMA-kriteriet ”Aktivt s?gende” ” "; 

   }
   */
   
   questionArray[0] = new question(comment1_1,"V življenju ne obupujem, ampak vedno poskusim znova.",inputvalue[key].val1[0]);
   questionArray[1]=  new question(comment1_2,"Sposoben sem sprejeti kritiko.",inputvalue[key].val1[1]);
   questionArray[2] = new question( comment1_3,"Èe naredim napako, jo priznam in popravim.",inputvalue[key].val1[2]);
   questionArray[3] = new question( comment1_4,"Kadar se znajdem v življenjski stiski, znam prositi za pomoè.",inputvalue[key].val1[3]);
   questionArray[4] = new question(comment1_5,"Vzdržujem odnose, ki mi pomagajo na moji poklicni poti. ",inputvalue[key].val1[4]);

   questionArray2 = [];
   questionArray2[0] = new question(comment2_1,"Motiviran sem za opravljanje vsakršnega dela.",inputvalue[key].val2[0]);
   questionArray2[1]= new question(comment2_2,"Na dogovorjena sreèanja (sestanke, delo itd.) pridem pripravljen, pravoèasno in redno.",inputvalue[key].val2[1]);
   questionArray2[2]= new question(comment2_3,"Ljudje se lahko zanesejo name, saj naredim, kar se dogovorimo.",inputvalue[key].val2[2]);
   questionArray2[3]= new question(comment2_4,"Vestno opravljam tudi delo, ki me ne zanima.",inputvalue[key].val2[3]);
   questionArray2[4]= new question(comment2_5,"Prevzamem odgovornost za dano nalogo.",inputvalue[key].val2[4]);
 
   questionArray3 = [];
   questionArray3[0] = new question(comment3_1,	"Znam narediti naèrt, s katerim opredelim cilje in pot za njihovo doseganje."	,inputvalue[key].val3[0]);
   questionArray3[1]= new question(comment3_2,	"Zavedam se, v kolikšni meri sem sam odgovoren za svojo trenutno življenjsko situacijo.",inputvalue[key].val3[1]);
   questionArray3[2] = new question(comment3_3,"Razumem, kako moje odloèitve lahko vplivajo na mojo prihodnost.",inputvalue[key].val3[2]);
   questionArray3[3] = new question(comment3_4,"Raziskujem razliène možnosti za dosego svojih ciljev.",inputvalue[key].val3[3]);
   questionArray3[4] = new question(comment3_5,"Za dosego ciljev in uresnièevanje naèrta sem se pripravljen sooèiti z izzivi in zahtevnimi nalogami.",inputvalue[key].val3[4]);
 
   questionArray4 = [];
   questionArray4[0] = new question(comment4_1,"Vem, kako pogosto se išèe delavce za delo, ki me zanima."	,inputvalue[key].val4[0]);
   questionArray4[1]= new question(comment4_2,"Samostojno in iz razliènih virov (splet, sodelavci, nadrejeni ipd.) pridobivam informacije, ki jih potrebujem pri svojem delu.",inputvalue[key].val4[1]);
   questionArray4[2] = new question(comment4_3,"Zavedam se, da ima vsako delovno okolje svoja pravila, navade, cilje ipd., ki jih je treba upoštevati.",inputvalue[key].val4[2]);
   questionArray4[3] = new question(comment4_4,"Pri delu sem pripravljen upoštevati navodila nadrejenega.",inputvalue[key].val4[3]);
   questionArray4[4] = new question(comment4_5,"Razmišljam, kako bi se delo lahko izboljšalo. Izvedem ali predlagam izboljšave.",inputvalue[key].val4[4]);

   questionArray5 = [];
   questionArray5[0] = new question(comment5_1,"Pripravljen sem se preseliti/voziti na izobraževanje ali delo."	,inputvalue[key].val5[0]);
   questionArray5[1] = new question(comment5_2,"Sposoben sem delati veè nalog hkrati."	,inputvalue[key].val5[1]);
   questionArray5[2] = new question(comment5_3,"Pripravljen sem se prilagoditi razliènim naèinom dela (samostojno, v paru, v skupini ipd.)."	,inputvalue[key].val5[2]);
   questionArray5[3] = new question(comment5_4,"Èe je potrebno, lahko spremenim svoja stališèa in odloèitve."	,inputvalue[key].val5[3]);
   questionArray5[4]= new question(comment5_5,	"Sposoben sem se prilagoditi spremembam na delu (npr. druga lokacija, drugaèen delovni èas, novi sodelavci, drugo delovno mesto in naloge).",inputvalue[key].val5[4]);
 
   questionArray6 = [];
   questionArray6[0] = new question(comment6_1,"Na podlagi predstavitve konkretnega delovnega mesta, znam presoditi ali imam zanj potrebna znanja in vešèine."	,inputvalue[key].val6[0]);
   questionArray6[1]= new question(comment6_2,	"Znam se predstaviti potencialnemu delodajalcu.",inputvalue[key].val6[1]);
   questionArray6[2] = new question(comment6_3,"Želim si in sem pripravljen še naprej razvijati svoja znanja in vešèine.",inputvalue[key].val6[2]);
   questionArray6[3] = new question(comment6_4,"Delovne naloge opravljam natanèno in z le malo napakami.",inputvalue[key].val6[3]);
   questionArray6[4] = new question(comment6_5,"Èe bi bilo potrebno, sem pripravljen pridobiti znanja in vešèine za drug poklic.",inputvalue[key].val6[4]);
  
   var prop = [questionArray,questionArray2,questionArray3,questionArray4,questionArray5,questionArray6];
  
   profile_array.push(prop);
 
    }
let taxo = ['Ikke vigtigt','Vil gerne','Pr?ver','I gang','Godt p? vej','Styr p? det'];