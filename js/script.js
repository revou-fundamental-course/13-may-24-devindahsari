let isKelilingVisible = false //keliling is hide
function HideOrShow()
{
    if(isKelilingVisible == false)
        {
            isKelilingVisible = true;
            document.getElementById('luas-segitiga').style.display = 'none';
            document.getElementById('keliling-segitiga').style.display = 'block';
        }
        else
        {
            isKelilingVisible = false;
            document.getElementById('luas-segitiga').style.display = 'block';
            document.getElementById('keliling-segitiga').style.display = 'none';
        }
}

function HitungLuas()
{
    let alasSegitiga = document.getElementById('alas').value;
    let tinggiSegitiga = document.getElementById('tinggi').value; 
    if (alasSegitiga == '' || alasSegitiga == null)
        {
            document.getElementById('alas').style.border='2px solid red';
            alert('Your input is empty, please check again');
            
        }
    else if(tinggiSegitiga == '' || tinggiSegitiga == null)
        {
            document.getElementById('tinggi').style.border='2px solid red';
            alert('Your input is empty, please check again');
        }
    else
    {
        luas=(0.5*alasSegitiga*tinggiSegitiga);
        document.getElementById('luas').value = luas;  
    }     
}

document.getElementById('btn-hitungluas').addEventListener('click', () => HitungLuas())

function HitungKeliling()
{
    let sisi1 = document.getElementById('sisiA').value;
    let sisi2 = document.getElementById('sisiB').value;
    let sisi3 = document.getElementById('sisiC').value;
    if (sisi1 == '' || sisi1 == null)
        {
            document.getElementById('sisiA').style.border='2px solid red';
            alert('Your input is empty, please check again');
        }
    else if (sisi2 == '' || sisi2 == null)
        {
            document.getElementById('sisiB').style.border='2px solid red';
            alert('Your input is empty, please check again');
        }
    else if (sisi3 == '' || sisi3 == null)
        {
            document.getElementById('sisiC').style.border='2px solid red';
            alert('Your input is empty, please check again');
        }
    else
    {
        let keliling=(1*sisi1)+(1*sisi2)+(1*sisi3);
        document.getElementById('keliling').value = keliling;
    }
}

document.getElementById('btn-hitungkeliling').addEventListener('click', () => HitungKeliling())

function ResetForm()
{
    document.getElementById('formSegitiga').reset();
}