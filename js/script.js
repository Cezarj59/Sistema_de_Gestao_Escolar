//Variaveis Html
const formAlunos = document.getElementById("form-alunos");
const formProfessores = document.getElementById("form-professores");
const formCursos = document.getElementById("form-cursos");
const home = document.getElementById("home");
const formularios = document.getElementById("formularios");
const mostraCards = document.getElementById("mostraCards");
const label = document.getElementsByTagName("label");//retornaArray

//Variavel cadastros //retornaArray
const cadastros = document.getElementsByClassName("cadastros");
//variaveis NavbarConsultas //retornaArray
const alunos = document.getElementsByClassName("alunos");
const professores = document.getElementsByClassName("professores");
const geral = document.getElementsByClassName("todos");
const cursos = document.getElementsByClassName("cursos");


function alternaMenuNavBar(x) {
    switch (x) {
        case 1:
            home.style.display = "block";
            formularios.style.display = "none";
            mostraCards.style.display = "none";

            alunos[0].style.display = "none";
            alunos[1].style.display = "none";
            alunos[2].style.display = "none";

            professores[0].style.display = "none";
            cursos[0].style.display = "none";

            geral[0].style.display = "none";
            geral[1].style.display = "none";
            geral[2].style.display = "none";

            break;
        case 2:
            home.style.display = "none";
            formularios.style.display = "block";
            mostraCards.style.display = "none";

            alunos[0].style.display = "none";
            alunos[1].style.display = "none";
            alunos[2].style.display = "none";

            professores[0].style.display = "none";
            cursos[0].style.display = "none";

            geral[0].style.display = "none";
            geral[1].style.display = "none";
            geral[2].style.display = "none";
            break;
        case 3:
            home.style.display = "none";
            formularios.style.display = "none";
            mostraCards.style.display = "flex";

            break;
    }
}

function alternaFormularios(x) {
    switch (x) {
        case 1:
            formAlunos.style.display = "block";
            formProfessores.style.display = "none";
            formCursos.style.display = "none";
            break;
        case 2:
            formAlunos.style.display = "none";
            formProfessores.style.display = "block";
            formCursos.style.display = "none";
            break;
        case 3:
            formAlunos.style.display = "none";
            formProfessores.style.display = "none";
            formCursos.style.display = "block";
            break;
    }
}

function alteraConsultas(x) {
    mostraCards.style.display = "flex";
    switch (x) {
        case 1:
            alunos[0].style.display = "block";
            alunos[1].style.display = "block";
            alunos[2].style.display = "block";

            professores[0].style.display = "none";
            cursos[0].style.display = "none";


            geral[0].style.display = "none";
            geral[1].style.display = "none";
            geral[2].style.display = "none";

            break;
        case 2:
            alunos[0].style.display = "none";
            alunos[1].style.display = "none";
            alunos[2].style.display = "none";

            professores[0].style.display = "block";
            cursos[0].style.display = "none";


            geral[0].style.display = "none";
            geral[1].style.display = "none";
            geral[2].style.display = "none";
            break;
        case 3:
            alunos[0].style.display = "none";
            alunos[1].style.display = "none";
            alunos[2].style.display = "none";

            professores[0].style.display = "none";
            cursos[0].style.display = "block";


            geral[0].style.display = "none";
            geral[1].style.display = "none";
            geral[2].style.display = "none";
            break;
        case 4:
            alunos[0].style.display = "none";
            alunos[1].style.display = "none";
            alunos[2].style.display = "none";

            professores[0].style.display = "none";
            cursos[0].style.display = "none";

            geral[0].style.display = "none";
            geral[1].style.display = "none";
            geral[2].style.display = "none";
            break;
        case 5:
            alunos[0].style.display = "none";
            alunos[1].style.display = "none";
            alunos[2].style.display = "none";

            professores[0].style.display = "none";
            cursos[0].style.display = "none";

            geral[0].style.display = "block";
            geral[1].style.display = "block";
            geral[2].style.display = "block";
            break;
    }
}



//Variaveis Inputs formularios
//Form Aluno
const nomeAlunoVar = document.getElementById("inputName");
const idadeAluno = document.getElementById("tinputAge");
const emailAluno = document.getElementById("inputEmail");
const telAluno = document.getElementById("tinputPhone");
const cursoPretendido = document.getElementById("inputMatricula");
const periodoAluno = document.getElementById("selectPeriodo");
//Form Professor
const nomeProfessorVar = document.getElementById("inputNameProfessor");
const cursoLeciona = document.getElementById("inputLeciona");
const emailProfessor = document.getElementById("inputEmailProfessor");
const telProfessor = document.getElementById("inputPhoneProfessor");
//Form Curso
const nomeCursoVar = document.getElementById("inputCurso");
const emailCoordenador = document.getElementById("inputEmailCurso");
const telCoordenador = document.getElementById("tinputPhoneCurso");
const periodoCursoManha = document.getElementById("periodoCurso-0");
const periodoCursoTarde = document.getElementById("periodoCurso-1");
const periodoCursoNoite = document.getElementById("periodoCurso-2");
const descricao = document.getElementById("textareaDescricao");


const alunosArr = [];
const professoresArr = [];
const cursosArr = [];

/*--------------------Classes------------------------------ */


class Alunos {

    constructor(nCadastro, nAluno, idAluno, emAluno, tlAluno, csPretendido, pdAluno) {
        this.cadastroN = nCadastro;
        this.nome = nAluno;
        this.idade = idAluno;
        this.email = emAluno;
        this.tel = tlAluno;
        this.curso = csPretendido;
        this.periodo = pdAluno;
    }

    card = function () {

        return '<div class="card">' +
            '<p><strong>CADASTRO DE ALUNO Nº:&nbsp</strong> ' + Number(this.cadastroN + 1) + '</p>' +
            '<p><strong>Aluno:&nbsp</strong> ' + this.nome + '</p>' +
            '<p><strong>Idade:&nbsp</strong> ' + this.idade + '</p>' +
            '<p><strong>E-mail:&nbsp</strong> ' + this.email + '</p>' +
            '<p><strong>Telefone:&nbsp</strong> ' + this.tel + '</p>' +
            '<p><strong>Curso:&nbsp</strong> ' + this.curso + '</p>' +
            '<p><strong>Periodo:&nbsp</strong> ' + this.periodo + '</p>' +
            '<button type="button" onclick="deletarCadastro(' + this.cadastroN + ',  alunosArr  )" class="deletar btn btn-danger">Deletar</button>' +
            '</div>';
    }
    cardSimples = function () {
        return '<div class="card">' +
            '<p><strong>CADASTRO DE ALUNOS Nº:&nbsp</strong> ' + Number(this.cadastroN + 1) + '</p>' +
            '<p><strong>Aluno:&nbsp</strong> ' + this.nome + '</p>' +
            '<p><strong>Idade:&nbsp</strong> ' + this.idade + '</p>' +
            '<p><strong>E-mail:&nbsp</strong> ' + this.email + '</p>' +
            '<p><strong>Telefone:&nbsp</strong> ' + this.tel + '</p>' +
            '<p><strong>Curso:&nbsp</strong> ' + this.curso + '</p>' +
            '<p><strong>Periodo:&nbsp</strong> ' + this.periodo + '</p>' +
            '</div>';

    }

}

class Professores {

    constructor(nCadastro, nomeProfessor, cursoLec, emailProf, telProf) {
        this.cadastroN = nCadastro;
        this.nomeProfessor = nomeProfessor;
        this.cursoLec = cursoLec;
        this.email = emailProf;
        this.tel = telProf;
    }

    card = function () {

        return '<div  class="card">' +
            '<p><strong>CADASTRO DE PROFESSORES Nº:&nbsp</strong> ' + Number(this.cadastroN + 1) + '</p>' +
            '<p><strong>Professor:&nbsp</strong> ' + this.nomeProfessor + '</p>' +
            '<p><strong>Professor de :&nbsp</strong> ' + this.cursoLec + '</p>' +
            '<p><strong>E-mail:&nbsp</strong> ' + this.email + '</p>' +
            '<p><strong>Telefone:&nbsp</strong> ' + this.tel + '</p>' +
            '<button type="button" onclick="deletarCadastro(' + this.cadastroN + ',  professoresArr  )" class="deletar btn btn-danger">Deletar</button>' +
            '</div>';
    }
}

class Cursos {
    constructor(nCadastro, nomeCurso, emailCoord, telefoneCoord, periodoM, periodoT, periodoN, descricaoCurso) {
        this.cadastroN = nCadastro;
        this.nomeCurso = nomeCurso;
        this.emailCoord = emailCoord;
        this.telefoneCoord = telefoneCoord;
        this.periodoM = periodoM;
        this.periodoT = periodoT;
        this.periodoN = periodoN;
        this.descricaoCurso = descricaoCurso;
    }

    card = function () {

        return '<div class="card">' +
            '<p><strong>CADASTRO DE CURSOS Nº:&nbsp</strong> ' + Number(this.cadastroN + 1) + '</p>' +
            '<p><strong>Curso:&nbsp</strong> ' + this.nomeCurso + '</p>' +
            '<p><strong>E-mail Coordenador:&nbsp</strong> ' + this.emailCoord + '</p>' +
            '<p><strong>Telefone Coordenador:&nbsp</strong> ' + this.telefoneCoord + '</p>' +
            '<p><strong>Turno Manhã:&nbsp</strong> ' + this.periodoM + '</p>' +
            '<p><strong>Turno Tarde:&nbsp</strong> ' + this.periodoT + '</p>' +
            '<p><strong>Turno Noite:&nbsp</strong> ' + this.periodoN + '</p>' +
            '<p><strong>Descrição:&nbsp</strong> ' + this.descricaoCurso + '</p>' +
            '<button type="button" onclick="deletarCadastro(' + this.cadastroN + ',  cursosArr  )" class="deletar btn btn-danger">Deletar</button>' +
            '</div>';
    }
}

/*----------------------Logica-------------------------------------- */
function alunosInsert() {
    let novoCadastroAluno = new Alunos(alunosArr.length, nomeAlunoVar.value.toUpperCase(), idadeAluno.value, emailAluno.value, telAluno.value, cursoTransform(cursoPretendido.value), periodosTransform(periodoAluno.value));
    alunosArr.push(novoCadastroAluno);
}

function professoresInsert() {
    let novoCadastroProfessor = new Professores(professoresArr.length, nomeProfessorVar.value.toUpperCase(), cursoTransform(cursoLeciona.value), emailProfessor.value, telProfessor.value);
    professoresArr.push(novoCadastroProfessor);
}
function cursosInsert() {
    let novoCadastroCurso = new Cursos(cursosArr.length, nomeCursoVar.value.toUpperCase(), emailCoordenador.value, telCoordenador.value, manha, tarde, noite, descricao.value);
    cursosArr.push(novoCadastroCurso);
}



function cadastrar(x) {
    switch (x) {
        case 1:
            if (nomeAlunoVar.value == "" || idadeAluno.value == "" || emailAluno.value == "" || telAluno.value == "" || isNaN(idadeAluno.value) || idadeAluno.value < 1) {
                formInvalidoAluno();
            } else {
                alunosInsert();
                formInvalidoreset();
                alert("Cadastro efetuado com Sucesso!!!");
                resetForms();
            }
            break;

        case 2:
            if (nomeProfessorVar.value == "" || emailProfessor.value == "" || telProfessor.value == "") {
                formInvalidoProfessor();
            } else {
                professoresInsert()
                formInvalidoreset()
                alert("Cadastro efetuado com Sucesso!!!");
                resetForms();
            }
            break;

        case 3:

            if (nomeCursoVar.value == "" || emailCoordenador.value == "" || telCoordenador.value == "" || periodoCursoManha.checked == false && periodoCursoTarde.checked == false && periodoCursoNoite.checked == false) {
                formInvalidoCurso();
            } else {
                ativaCheckbox();
                cursosInsert();
                formInvalidoreset();
                alert("Cadastro efetuado com Sucesso!!!");
                resetForms();
            }
            break;
    }
}

function exibirComDelete(param, mostrar) {

    let card = "";


    for (let i = 0; i < param.length; i++) {
        card += param[i].card();
    }
    mostrar.innerHTML = card;
}

function exibirSemDelete(param, mostrar) {

    let card = "";
    for (let i = 0; i < param.length; i++) {
        card += param[i].cardSimples();
    }
    mostrar.innerHTML = card;
}








function deletarCadastro(x, paramArray) {
    for (let i in paramArray) {
        if (x == paramArray[i].cadastroN) {
            paramArray.splice(i, 1);
            exibirComDelete(paramArray, mostraCards)
        }
    }
}


function mostrarCardConsulta(x) {

    switch (x) {
        case 1:
            // Todos os Alunos
            exibirComDelete(alunosArr, mostraCards);
            break;
        case 2:
            //maior de idade
            maiorArr = []
            for (let i in alunosArr) {
                if (alunosArr[i].idade >= 18) {
                    maiorArr.push(alunosArr[i]);
                }
            }
            exibirSemDelete(maiorArr, mostraCards);
            break;
        case 3:
            //menor de idade
            menorArr = []
            for (let i in alunosArr) {
                if (alunosArr[i].idade < 18) {
                    menorArr.push(alunosArr[i]);
                }
            }
            exibirSemDelete(menorArr, mostraCards);
            break;
        case 4:

            exibirComDelete(professoresArr, mostraCards);
            break;
        case 5:

            exibirComDelete(cursosArr, mostraCards);
            break;
        case 6:
            exibirComDelete(professoresArr, mostraCards);
            break;

        case 7:
            exibirComDelete(alunosArr, mostraCards);            
            break;
    }
}


/*------------------converte .value--------------------- */

function cursoTransform(param) {

    let curso;
    switch (param) {
        case "1":
            curso = "Arquitetura";
            break;
        case "2":
            curso = "Artes";
            break;
        case "3":
            curso = "Astronomia";
            break;
        case "4":
            curso = "Filosofia";
            break;
    }
    return curso.toUpperCase();
}
function periodosTransform(param) {
    let periodoTransform;
    if (param == "m") {
        periodoTransform = "Manhã";
    } else if (param == "t") {
        periodoTransform = "Tarde";
    } else {
        periodoTransform = "Noite";
    }
    return periodoTransform;
}

function ativaCheckbox() {
    if (periodoCursoManha.checked) {
        manha = "✅"
    } else {
        manha = "❌";
    }
    if (periodoCursoTarde.checked) {
        tarde = "✅"
    } else {
        tarde = "❌";
    }
    if (periodoCursoNoite.checked) {
        noite = "✅"
    } else {
        noite = "❌";
    }
}//checkbox form cursos


/*----------------------Validação Formularios----------------------------- */
function formInvalidoAluno() {
    if (nomeAlunoVar.value == "") {
        label[0].style.color = "#f00";
        nomeAlunoVar.style.border = "1px solid #f00";
        nomeAlunoVar.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite o nome do Aluno.");
    } else if (idadeAluno.value == "") {
        label[1].style.color = "#f00";
        idadeAluno.style.border = "1px solid #f00";
        idadeAluno.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite a idade do Aluno.");
    } else if (isNaN(idadeAluno.value)) {
        label[1].style.color = "#f00";
        idadeAluno.style.border = "1px solid #f00";
        idadeAluno.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite somente numeros no campo idade.");
    } else if (idadeAluno.value < 1) {
        label[1].style.color = "#f00";
        idadeAluno.style.border = "1px solid #f00";
        idadeAluno.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite uma idade válida. \n Números negativos não são permitidos.");
    } else if (emailAluno.value == "") {
        label[2].style.color = "#f00";
        emailAluno.style.border = "1px solid #f00";
        emailAluno.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite o email do Aluno.");
    } else if (telAluno.value == "") {
        label[3].style.color = "#f00";
        telAluno.style.border = "1px solid #f00";
        telAluno.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite o telefone do Aluno.");
    }
}
function formInvalidoProfessor() {
    if (nomeProfessorVar.value == "") {
        label[8].style.color = "#f00";
        nomeProfessorVar.style.border = "1px solid #f00";
        nomeProfessorVar.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite o nome do Professor.");
    } else if (emailProfessor.value == "") {
        label[10].style.color = "#f00";
        emailProfessor.style.border = "1px solid #f00";
        emailProfessor.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite o email do Professor.");

    } else if (telProfessor.value == "") {
        label[11].style.color = "#f00";
        telProfessor.style.border = "1px solid #f00";
        telProfessor.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite o telefone do Professor.");

    }
}
function formInvalidoCurso() {
    if (nomeCursoVar.value == "") {
        label[13].style.color = "#f00";
        nomeCursoVar.style.border = "1px solid #f00";
        nomeCursoVar.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite o nome do Curso.");
    } else if (emailCoordenador.value == "") {

        label[14].style.color = "#f00";
        emailCoordenador.style.border = "1px solid #f00";
        emailCoordenador.style.backgroundColor = "#E6CAC8";
        alert(" Atenção!!! \n Digite o email do coordenador do curso.");

    } else if (telCoordenador.value == "") {
        label[15].style.color = "#f00";
        telCoordenador.style.border = "1px solid #f00";
        telCoordenador.style.backgroundColor = "#E6CAC8";

    } else if (periodoCursoManha.checked == false && periodoCursoTarde.checked == false && periodoCursoNoite.checked == false) {
        label[16].style.color = "#f00";
        label[17].style.color = "#f00";
        label[18].style.color = "#f00";
        label[19].style.color = "#f00";
        alert(" Atenção!!! \n Selecione pelo menos um periodo.");
    }

}

function formInvalidoreset() {
    label[0].style.color = "#000";
    nomeAlunoVar.style.border = "1px solid #CED4DA";
    nomeAlunoVar.style.backgroundColor = "#fff";
    label[1].style.color = "#000";
    idadeAluno.style.border = "1px solid #CED4DA";
    idadeAluno.style.backgroundColor = "#fff";
    label[2].style.color = "#000";
    emailAluno.style.border = "1px solid #CED4DA";
    emailAluno.style.backgroundColor = "#fff";
    label[3].style.color = "#000";
    telAluno.style.border = "1px solid #CED4DA";
    telAluno.style.backgroundColor = "#fff";


    label[8].style.color = "#000";
    nomeProfessorVar.style.border = "1px solid #CED4DA";
    nomeProfessorVar.style.backgroundColor = "#fff";
    label[10].style.color = "#000";
    emailProfessor.style.border = "1px solid #CED4DA";
    emailProfessor.style.backgroundColor = "#fff";
    label[11].style.color = "#000";
    telProfessor.style.border = "1px solid #CED4DA";
    telProfessor.style.backgroundColor = "#fff";

    label[13].style.color = "#000";
    nomeCursoVar.style.border = "1px solid #CED4DA";
    nomeCursoVar.style.backgroundColor = "#fff";
    label[14].style.color = "#000";
    emailCoordenador.style.border = "1px solid #CED4DA";
    emailCoordenador.style.backgroundColor = "#fff";
    label[15].style.color = "#000";
    telCoordenador.style.border = "1px solid #CED4DA";
    telCoordenador.style.backgroundColor = "#fff";

    label[16].style.color = "#000";
    label[17].style.color = "#000";
    label[18].style.color = "#000";
    label[19].style.color = "#000";
}

function resetForms() {
    let formulariosResetar = document.getElementsByClassName("forms");
    formulariosResetar[0].reset();
    formulariosResetar[1].reset();
    formulariosResetar[2].reset();
}









/*------------style Navbar---------------*/
const navStyle = document.getElementsByClassName("navStyle");
function active(x) {
    switch (x) {
        case 0:
            navStyle[0].classList.add("active");
            navStyle[1].classList.remove("active");
            navStyle[2].classList.remove("active");
            break;
        case 1:
            navStyle[1].classList.add("active");
            navStyle[0].classList.remove("active");
            navStyle[2].classList.remove("active");
            break;
        case 2:
            navStyle[2].classList.add("active");
            navStyle[0].classList.remove("active");
            navStyle[1].classList.remove("active");
            break;
    }
}




