//kamen
var k_p = 0.0001; //kamen passive
var k_k = 0.1;//eng na klick

//energija
var e1 = 10; //d_energija
var e1_maks = 2; //maks capaciteta
var e1_sec = 0; // energija na sekundo
var e2 = 0;//pretvorjenje energije
var e2_pre = 0.005; //hitrost v pretvarjanje
var e1_skp = 0;//vsa energija skupaj

//material------------------
var m1 = 0;
var m1_p = 0.000015;
var m1_h = 0.000005;
var m2 = 0; // d_mat v pretvorbi
//mozaide------------------
var mzd_prc = 1;
var mozaide_slk = [
                    ["Mozaide",0],
                    ["Sanje",0],
                    ["Barve",0],
                    ["Marvin",0],
                    ["Palica",0],
                    ["Cas",0],
                    ["Doodle",0],
                    ["Jaz_ed",0],
                    ["Jaz_mn",0],
                    ["Kamen",0],
                    ["Kazala",0],
                    ["Jing-jang",0],
                    ["Luna_gore",0],
                    ["Luna_sijaj",0],
                    ["Luna_nic",0],
                  
                  ];

var zaaa = JSON.stringify(mozaide_slk);

console.log(zaaa);
var mzd_all = mozaide_slk.length;
var mzd_own = 0;
var link_slk_mzd = ["Mozaide/000_Mozaide.jpg", "Mozaide/001_Luna_sanje.jpg", "Mozaide/002_Barve.jpg", "Mozaide/003_Marvin.jpg", "Mozaide/004_Palica.jpg", "Mozaide/005_Cas.jpg", "Mozaide/006_Doodle.jpg", "Mozaide/007_Jaz-ed.jpg", "Mozaide/008_Jaz-mn.jpg", "Mozaide/009_Kamen.jpg", "Mozaide/010_Kazala.jpg", "Mozaide/011_Jing-jang.jpg", "Mozaide/012_Luna-gore.jpg", "Mozaide/014_Luna-sijaj.jpg", "Mozaide/015_Luna-nic.jpg"];

//upgrades price------------------
var p1_cap = 3.69;
var p1_con = 1;
var p1_pre = 1;

var m2 = 0;
//converting
var trn_gmb = document.getElementById("con_gmb");
var an_onf = 'off';
var t_chr = 0.005;
var t_fee = 0.01;
var t_fa = 0;

var interval = setInterval(paradoks,100);
//funkcije<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function paradoks(){
//izpis
//izpis zgoraj
    document.getElementById("d_enr").innerHTML = e1.toFixed(2);
    document.getElementById("d_mat").innerHTML = m1.toFixed(2);
//izpis obstoj 
    e1_sec = (k_p + (m1*m1_p))*10;
    document.getElementById("kmn_eng").innerHTML = e1.toFixed(2);
    document.getElementById("kmn_sec").innerHTML = e1_sec.toFixed(3) + "/sec";
    if(e2>=10 || e2==0){
        document.getElementById("ob_eng").innerHTML = e2.toFixed(0) + "/" + e1_maks.toFixed(0);
    }else{document.getElementById("ob_eng").innerHTML = e2.toFixed(2) + "/" + e1_maks.toFixed(0);}
    if(m2>=10 || m2==0){
        document.getElementById("ob_mat").innerHTML = m2.toFixed(0);;
    }else{document.getElementById("ob_mat").innerHTML = m2.toFixed(2);}
    //_-------
    document.getElementById("maks_enr").innerHTML = e1_maks.toFixed(2);
    document.getElementById("maks_enr_af").innerHTML = (e1_maks*2).toFixed(2);
    document.getElementById("maks_enr_p").innerHTML = p1_cap.toFixed(2);
    //--------
    document.getElementById("con_rt").innerHTML = e2_pre.toFixed(3);
    document.getElementById("con_rt_af").innerHTML = (e2_pre*2).toFixed(3);
    document.getElementById("con_rt_p").innerHTML = p1_con.toFixed(2);
    document.getElementById("con_pre").innerHTML = t_chr.toFixed(3);
    document.getElementById("con_pre_af").innerHTML = (t_chr*2).toFixed(3);
    document.getElementById("con_pre_p").innerHTML = p1_pre.toFixed(0);
    //--------
    document.getElementById("mzd_price").innerHTML = mzd_prc.toFixed(2);
    document.getElementById("total_mzd").innerHTML = mzd_own.toFixed(0) + "/" + mzd_all.toFixed(0);
//klic funkcij
    passive();
    conversion();
    hlap();
}
function kmn(){
    if(e1 < 1){
            e1 = e1 + k_k;
            e1_skp = e1_skp + k_k;
            
    }
}
function passive(){
        e1 = e1+k_p + (m1*m1_p);
        e1_skp = e1_skp + k_p + (m1*m1_p);
}
function hlap(){
    if(m1 >0){
        if(m1 >10){
            m1_h = 0.00005 * (m1/10);
        }else{m1_h = 0.00005}
        m1 = m1 - m1_h;
    }else{
        m1 = 0;
    }
}
function conversion(){
    if(an_onf === 'on'){
        if(e2 > 0){
            e2 = e2 - e2_pre;
            m2 =  m2 + e2_pre;
        }else{
            e2 = 0;
            transfer();
        }
    }else if(an_onf ==='charge'){
        if(e1 > 0){
            e2 = e2 + t_chr;
            e1 = e1 - t_chr;
            if(e2 >= e1_maks){
                an_onf = 'on';
                trn_gmb.style.animation ="paused";
                trn_gmb.style.animation ="converting 1s infinite";
            }
        }
        if(e1 <= 0){
            e1 = 0;
            an_onf = 'on';
            trn_gmb.style.animation ="paused";
            trn_gmb.style.animation ="converting 1s infinite";

            t_fa = 0;
        }
    }
}
function pret(){
    if(an_onf === 'off' && e1 > t_fee){
        an_onf = 'charge';
        t_fa = t_fee* e1;
        e1 = e1 - t_fa;
         trn_gmb.style.animation ="spin 1s infinite";
    }else if(an_onf === 'charge'){
        an_onf= 'on';
        trn_gmb.style.animation ="paused";
        trn_gmb.style.animation ="converting 1s infinite";
        return;
    }else{
        return;
    }
    
}

function transfer(){
    an_onf = 'off';
        if(m2>0){
            m1 = m1 + m2;
            m2 = 0;
            e1 = e1 + e2;
            e2 = 0;
        }
        trn_gmb.style.animation ="paused";
}
function up_cap(){
    if(m1>=p1_cap){
        m1 = m1 -p1_cap;
        p1_cap = p1_cap * 1.618;
        e1_maks = e1_maks *2;
    }
}
function up_con(){
    if(m1>=p1_con){
        m1 = m1 - p1_con;
        p1_con = p1_con * 3.14;
        e2_pre = e2_pre * 2;
    }
}
function up_pre(){
    if(m1>=p1_pre){
        m1 = m1 - p1_pre;
        p1_pre = p1_pre * 10;
        t_chr = t_chr * 2;
    }
}

function ustrvari_mzd(){
    
    if(m1 >= mzd_prc){
        m1 = m1 - mzd_prc;
    var rando1 = Math.floor(Math.random()*mozaide_slk.length);
    for(i = 0; i< mozaide_slk.length; i++ ){
                if(mozaide_slk[rando1][1] == 0){
                    mzd_own++;
                    var d_mzd = document.createElement("DIV");
                    d_mzd.setAttribute("id", "i_mzd"+rando1);
                    d_mzd.setAttribute("class", "cls_d_mzd")
                    document.getElementById("mozaide_content").appendChild(d_mzd);
                    var mzd = document.createElement("IMG");
                    mzd.setAttribute("src", link_slk_mzd[rando1]);
                    mzd.setAttribute("class", "cls_mzd");
                    document.getElementById("i_mzd"+rando1).appendChild(mzd);
                    var t_mzd = document.createElement("A");
                    t_mzd.setAttribute("id", "izpis_mzd"+rando1);
                    t_mzd.setAttribute("class", "m_izpis");
                    document.getElementById("i_mzd"+rando1).appendChild(t_mzd);
                    
                }
                mozaide_slk[rando1][1]++;
                document.getElementById("izpis_mzd"+rando1).innerHTML = mozaide_slk[rando1][1];
                break;
                

    }
    console.table(mozaide_slk);
    }
}
