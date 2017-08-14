(function () {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];

    var container = document.getElementById('container');
    var form = document.createElement("form");
    form.setAttribute("id", "#");
    var hiddenid = document.createElement("input");
    hiddenid.type = "hidden";
    hiddenid.id = "hiddenid";
    hiddenid.value = -1;
    var name = document.createElement("input");
    name.name = "name";
    name.id = "name";
    var lastName = document.createElement("input");
    lastName.name = "lastName";
    lastName.id = "lastName";
    var email = document.createElement("input");
    email.name = "email";
    email.id = "email";
    var profilePicture = document.createElement("input");
    profilePicture.name = "profilePicture";
    profilePicture.id = "profilePicture";
    var skills = document.createElement("input");
    skills.name = "skills";
    skills.id = "skills";
    var save = document.createElement("input");
    save.type = "submit";
    save.value = "save";
    var cancel = document.createElement("input");
    cancel.type = "reset";
    cancel.value = "cancel";
    form.appendChild(name);
    form.appendChild(lastName);
    form.appendChild(email);
    form.appendChild(profilePicture);
    form.appendChild(skills);
    form.appendChild(save);
    form.appendChild(cancel);
    form.appendChild(hiddenid);


    if (form.attachEvent) {
        form.attachEvent("submit", processForm);
    } else {
        form.addEventListener("submit", processForm);
        form.addEventListener("reset", cancelForm);
    }

    var table = document.createElement("table");
    table.classList.add("table", "table-hover");
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var arrayOfTh = [];
    var header = ["Student ", "email: ", "Profile picture ", "Skills ", "Controls "];
    for (var i = 0; i < header.length; ++i) {
        arrayOfTh[i] = document.createElement("th");
        tr.appendChild(arrayOfTh[i]);
        var textNode = document.createTextNode(header[i]);
        arrayOfTh[i].appendChild(textNode);
        if (i === 0) {
            arrayOfTh[0].addEventListener("click", sort);
        }
    }

    var tbody = document.createElement("tbody");
    var sortedAZ = false;
    table.appendChild(tbody);
    for (var i = 0; i < students.length; i++) {
        createNewStudent(students[i], i);
        students[i].id = i;
    }
    tbody.addEventListener("click", outputStudentInfo, true);

    function outputStudentInfo(e) {
        var clickedTr = e.target.closest("tr");
        var buttons = document.getElementsByClassName("glyphicon")
        if (e.target.nodeName !== buttons[0].nodeName && e.target.nodeName !== buttons[1].nodeName) {
            alert(clickedTr.childNodes[0].innerHTML);
        }
    }

    function cancelForm(e) {
        document.getElementById("hiddenid").value = -1;
    }

    function processForm(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        var student = {};
        var invalidFields = [];
        var hiddenid = document.getElementById("hiddenid").value;
        console.log(hiddenid);
        student.name = document.getElementById("name").value;
        if (!isNameValid(student.name)) {
            invalidFields.push("name");
        }
        student.lastName = document.getElementById("lastName").value;
        if (!isNameValid(student.lastName)) {
            invalidFields.push("lastname");
        }
        student.email = document.getElementById("email").value;
        if (!isEmailValid(student.email)) {
            invalidFields.push("email");
        }
        student.img = document.getElementById("profilePicture").value;
        student.img = document.getElementById("profilePicture").value.split(" ");
        student.skills = document.getElementById("skills").value.split(" ");
        if (invalidFields.length > 0) {
            alert(invalidFields.join(", ") + " have to be valid");
        } else {
            if (hiddenid == -1) {
                student.id = students.length;
                createNewStudent(student, students.length);
                students.push(student);
            } else {
                student.id = hiddenid;
                editStudent(student);
            }
            document.getElementById("#").reset();
        }
    }

    function sendStudentToEdit(e) {
        window.location.href = "#";
        var studentInfoRow = e.target.closest("tr");
        var student = students[studentInfoRow.getAttribute("studentId")];
        document.getElementById("name").value = student.name;
        document.getElementById("lastName").value = student.lastName;
        document.getElementById("email").value = student.email;
        document.getElementById("profilePicture").value = student.img;
        document.getElementById("skills").value = student.skills.join(" ");
        document.getElementById("hiddenid").value = student.id;
    }

    function sort() {
        if (!sortedAZ) {
            students.sort(function (s1, s2) {
                if (s1.name < s2.name)
                    return -1
                if (s1.name > s2.name)
                    return 1
                return 0
            })
            sortedAZ = true;
        } else {
            students.sort(function (s1, s2) {
                if (s1.name < s2.name)
                    return 1
                if (s1.name > s2.name)
                    return -1
                return 0
            })
            sortedAZ = false;
        }
        tbody.innerHTML = "";
        for (var i = 0; i < students.length; ++i) {
            createNewStudent(students[i], i);
            students[i].id = i;
        }
    }

    function editStudent(student) {
        var studentInfoRow = document.querySelectorAll('[studentid="' + student.id + '"]')[0];
        var studentInfosNodes = studentInfoRow.childNodes;
        studentInfosNodes[0].innerHTML = `${student.name} ${student.lastName}`;
        studentInfosNodes[1].innerHTML = student.email;
        studentInfosNodes[2].childNodes[0].setAttribute("src", student.img);
        studentInfosNodes[3].innerHTML = student.skills.join(" ");
        students[student.id] = student;
    }

    function removeStudent(e) {
        var studentInfoRow = e.target.closest("tr");
        var student = students[studentInfoRow.getAttribute("studentId")];
        studentInfoRow.parentElement.removeChild(studentInfoRow);
        students.splice(student.id, 1);
    }

    function isNameValid(name) {
        if (!/^[A-Za-z\s]+$/.test(name)) {
            return false;
        }
        return true;
    }

    function isEmailValid(email) {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return false;
        }
        return true;
    }

    function createNewStudent(student, studentId) {
        var newStudent = document.createElement("tr");
        newStudent.setAttribute("studentId", studentId);
        tbody.appendChild(newStudent);
        //firstname&lastname
        var firstname = document.createElement("td");
        newStudent.appendChild(firstname);
        var textNode = document.createTextNode(`${student.name} ${student.lastName} `);
        firstname.appendChild(textNode);
        //email
        var email = document.createElement("td");
        newStudent.appendChild(email);
        var textNode = document.createTextNode(student.email);
        email.appendChild(textNode);
        //profilepicture
        var imgNode = document.createElement("img");
        imgNode.setAttribute("src", student.img);
        var imgTd = document.createElement("td");
        imgTd.appendChild(imgNode);
        newStudent.appendChild(imgTd);
        //skills
        var skills = document.createElement("td");
        newStudent.appendChild(skills);
        var textNode = document.createTextNode(student.skills);
        skills.appendChild(textNode);
        //controls
        var controls = document.createElement("td");
        var edit = document.createElement("button");
        edit.classList.add("glyphicon", "glyphicon-edit");
        edit.addEventListener("click", sendStudentToEdit);
        controls.appendChild(edit);
        var remove = document.createElement("button");
        remove.classList.add("glyphicon", "glyphicon-trash");
        controls.appendChild(remove);
        remove.addEventListener("click", removeStudent);
        newStudent.appendChild(controls);
    }
    console.log(form);
    console.log(table);
    container.appendChild(form);
    container.appendChild(table);
})();
