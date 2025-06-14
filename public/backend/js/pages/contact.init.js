var contactData = [
    { id: 1, user: { img: "assets/images/users/avatar-1.jpg", name: "Danielle Wright" }, email: "danielle@example.com", phone: "+(380) 39 489 7330", country: "Ukraine", label: "Family", tab: "frequently" },
    { id: 2, user: { img: "assets/images/users/avatar-2.jpg", name: "Stephen Bird" }, email: "stephen@example.com", phone: "+(907) 225-4144", country: "USA", label: "Imported", tab: "important" },
    { id: 3, user: { img: "assets/images/users/avatar-3.jpg", name: "Jeffrey Hunt" }, email: "jeffrey@example.com", phone: "+(907) 694-7675", country: "USA", label: "Business", tab: "groups" },
    { id: 4, user: { img: "assets/images/users/avatar-4.jpg", name: "Michael Brown" }, email: "michael@example.com", phone: "+(244) 948 701 110", country: "Angola", label: "Imported", tab: "trash" },
    { id: 5, user: { img: "assets/images/users/avatar-5.jpg", name: "David Daly" }, email: "david@example.com", phone: "+(244) 948 701 110", country: "Angola", label: "Imported", tab: "frequently" },
    { id: 6, user: { img: "assets/images/users/avatar-5.jpg", name: "Terry White" }, email: "terry@example.com", phone: "+(32) 493 33 65 89", country: "Belgium", label: "Family", tab: "groups" },
    { id: 7, user: { img: "assets/images/users/avatar-7.jpg", name: "Daniel Gonzalez" }, email: "daniel@example.com", phone: "+(55) 93 90819-1376", country: "Brazil", label: "Business", tab: "groups" },
    { id: 8, user: { img: "assets/images/users/avatar-8.jpg", name: "Stephen Garrison" }, email: "stephen@example.com", phone: "+(44) 7937 756071", country: "Jersey", label: "Family", tab: "frequently" },
    { id: 9, user: { img: "assets/images/users/avatar-9.jpg", name: "Ashley Silva" }, email: "ashley@example.com", phone: "+(55) 21 92608-8982", country: "Brazil", label: "Friends", tab: "frequently" },
    { id: 10, user: { img: "assets/images/users/avatar-10.jpg", name: "Charles Welch" }, email: "welch@example.com", phone: "+(264) 81 063 8558", country: "Namibia", label: "Friends", tab: "important" },
    { id: 11, user: { img: "assets/images/users/avatar-1.jpg", name: "Aaron Bauer" }, email: "aaron@example.com", phone: "+(34) 723 26 58 31", country: "Spain", label: "Imported", tab: "trash" },
    { id: 12, user: { img: "assets/images/users/avatar-2.jpg", name: "Heather Jimenez" }, email: "heather@example.com", phone: "+(380) 39 085 1057", country: "Ukraine", label: "Family", tab: "" },
    { id: 13, user: { img: "assets/images/users/avatar-3.jpg", name: "Scott Wilson" }, email: "scott@example.com", phone: "+(54) 9 3327 46-0897", country: "Argentina", label: "Friends", tab: "" },
    { id: 14, user: { img: "assets/images/users/avatar-4.jpg", name: "James Wolfe" }, email: "wolfe@example.com", phone: "+(264) 60 778 1765", country: "Namibia", label: "Business", tab: "" },
    { id: 15, user: { img: "assets/images/users/avatar-5.jpg", name: "Michelle Peterson" }, email: "michelle@example.com", phone: "+(244) 948 701 110", country: "Angola", label: "Imported", tab: "" },
    { id: 16, user: { img: "assets/images/users/avatar-6.jpg", name: "Denise Bowers" }, email: "denise@example.com", phone: "+(32) 493 33 65 89", country: "Belgium", label: "Family", tab: "" },
    { id: 17, user: { img: "assets/images/users/avatar-7.jpg", name: "William Hensley" }, email: "william@example.com", phone: "+(55) 22 95640-1280", country: "Brazil", label: "Business", tab: "" },
    { id: 18, user: { img: "assets/images/users/avatar-8.jpg", name: "Sharon Brewer" }, email: "sharon@example.com", phone: "+(44) 7797 929140", country: "Jersey", label: "Family", tab: "" },
    { id: 19, user: { img: "assets/images/users/avatar-9.jpg", name: "Barbara Nelson" }, email: "nelson@example.com", phone: "+(264) 85 162 8897", country: "Namibia", label: "Friends", tab: "" },
    { id: 20, user: { img: "assets/images/users/avatar-10.jpg", name: "Victoria Medina" }, email: "victoria@example.com", phone: "+(264) 85 162 8897", country: "Namibia", label: "Friends", tab: "" },
    { id: 21, user: { img: "assets/images/users/avatar-1.jpg", name: "Stacy Martin" }, email: "stacy@example.com", phone: "+(34) 590 60 09 06", country: "Spain", label: "Imported", tab: "" },
    { id: 22, user: { img: "assets/images/users/avatar-2.jpg", name: "Leslie Fink" }, email: "leslie@example.com", phone: "+(55) 93 90819-1376", country: "Brazil", label: "Business", tab: "" },
    { id: 23, user: { img: "assets/images/users/avatar-3.jpg", name: "Sean Walker" }, email: "sean@example.com", phone: "+(55) 93 90819-1376", country: "Brazil", label: "Business", tab: "" },
    { id: 24, user: { img: "assets/images/users/avatar-4.jpg", name: "Kristen Gray" }, email: "gray@example.com", phone: "+(44) 7937 756071", country: "Jersey", label: "Family", tab: "frequently" },
    { id: 25, user: { img: "assets/images/users/avatar-5.jpg", name: "Zachary Brown" }, email: "brown@example.com", phone: "+(55) 21 92608-8982", country: "Brazil", label: "Friends", tab: "important" },
    { id: 26, user: { img: "assets/images/users/avatar-6.jpg", name: "Dana Trevino" }, email: "dana@example.com", phone: "+(264) 81 063 8558", country: "Namibia", label: "Friends", tab: "groups" },
    { id: 27, user: { img: "assets/images/users/avatar-10.jpg", name: "Tonya Noble" }, email: "tonyanoble@hybrix.com\t", phone: "+(34) 414 453 5725", country: "Germany", label: "Business", tab: "trash" },
];
function sortElementsById() {
    contactData.sort(function (e, a) {
        (e = fetchIdFromObj(e)), (a = fetchIdFromObj(a));
        return a < e ? -1 : e < a ? 1 : 0;
    });
}
sortElementsById();
var contactList,
    editlist = !1;
function isStatus(e) {
    switch (e) {
        case "Family":
            return '<span class="badge badge-soft-success">' + e + "</span>";
        case "Friends":
            return '<span class="badge badge-soft-secondary">' + e + "</span>";
        case "Business":
            return '<span class="badge badge-soft-info">' + e + "</span>";
        case "Imported":
            return '<span class="badge badge-soft-danger">' + e + "</span>";
    }
}
function fetchIdFromObj(e) {
    return parseInt(e.id);
}
function findNextId() {
    var e, a;
    return 0 === contactData.length ? 0 : (e = fetchIdFromObj(contactData[contactData.length - 1])) <= (a = fetchIdFromObj(contactData[0])) ? a + 1 : e + 1;
}
function editMemberList(e) {
    var a = e;
    contactData = contactData.map(function (e) {
        return (
            e.id == a &&
                ((editlist = !0),
                (document.getElementById("addContactModalLabel").innerHTML = "Edit Contact"),
                (document.getElementById("addNewContact").innerHTML = "Save"),
                (document.getElementById("contactid-input").value = e.id),
                (document.getElementById("contact-img").src = e.user.img),
                (document.getElementById("name").value = e.user.name),
                (document.getElementById("email").value = e.email),
                (document.getElementById("phoneNumber").value = e.phone),
                (document.getElementById("country").value = e.country),
                (document.getElementById("label").value = e.label)),
            e
        );
    });
}
function removeItem(e) {
    var t = e;
    document.getElementById("remove-contact").addEventListener("click", function () {
        var a;
        (a = t),
            (contactData = contactData.filter(function (e) {
                return e.id != a;
            })),
            contactList.updateConfig({ data: contactData }).forceRender(),
            document.getElementById("removeContactModalbtn-close").click();
    });
}
function overviewList() {
    var e = event.target.parentElement.closest(".gridjs-tr"),
        a = e.querySelector(".user-img").src,
        t = e.querySelector(".user-name").innerHTML,
        n = e.querySelector("[data-column-id='email']").innerHTML,
        s = e.querySelector("[data-column-id='phone']").innerHTML,
        i = e.querySelector("[data-column-id='country']").innerHTML,
        e = e.querySelector("[data-column-id='label'] .badge").innerHTML;
    (document.querySelector("#viewContactoffcanvas .overview-userimg").src = a),
        document.querySelectorAll("#viewContactoffcanvas .overview-name").forEach(function (e) {
            e.innerHTML = t;
        }),
        (document.querySelector("#viewContactoffcanvas .overview-email").innerHTML = n),
        (document.querySelector("#viewContactoffcanvas .overview-phone").innerHTML = s),
        document.querySelectorAll("#viewContactoffcanvas .overview-location").forEach(function (e) {
            e.innerHTML = i;
        }),
        (document.querySelector("#viewContactoffcanvas .overview-tags").innerHTML = e);
}
document.getElementById("recomended-jobs") &&
    (contactList = new gridjs.Grid({
        columns: [
            {
                name: "Name",
                data: function (e) {
                    return gridjs.html(
                        '<div class="d-flex align-items-center">\t\t\t\t\t\t<div class="flex-shrink-0 me-2">\t\t\t\t\t\t<div class="avatar-xs rounded-circle"><img src="' +
                            e.user.img +
                            '" alt="" class="img-fluid rounded-circle d-block user-img"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="flex-grow-1">\t\t\t\t\t\t<h6 class="fw-medium mb-1 user-name">' +
                            e.user.name +
                            "</h6>\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>"
                    );
                },
            },
            { name: "Email" },
            { name: "Phone" },
            { name: "Country" },
            {
                name: "Label",
                data: function (e) {
                    return gridjs.html(isStatus(e.label));
                },
            },
            {
                name: "Action",
                width: "150px",
                data: function (e) {
                    return gridjs.html(
                        '<div class="d-flex align-items-center gap-2 justify-content-center">                        <div><a href="#viewContactoffcanvas" data-bs-toggle="offcanvas" onClick="overviewList()" class="text-muted px-1 d-block viewlist-btn"><i class="bi bi-eye-fill"></i></a></div>                        <div><a href="#addContactModal" data-bs-toggle="modal" onClick="editMemberList(' +
                            e.id +
                            ')"  class="text-muted px-1 d-block"><i class="bi bi-pencil-fill"></i></a></div>                        <div><a href="#removeContactModal" data-bs-toggle="modal" class="text-muted px-1 d-block" onClick="removeItem(' +
                            e.id +
                            ')"><i class="bi bi-trash-fill"></i></a></div>\t\t\t\t\t\t</div>'
                    );
                },
            },
        ],
        sort: !0,
        pagination: { limit: 10 },
        data: contactData,
    }).render(document.getElementById("recomended-jobs"))),
    document.querySelector("#contact-image-input").addEventListener("change", function () {
        var e = document.querySelector("#contact-img"),
            a = document.querySelector("#contact-image-input").files[0],
            t = new FileReader();
        t.addEventListener(
            "load",
            function () {
                e.src = t.result;
            },
            !1
        ),
            a && t.readAsDataURL(a);
    }),
    (function () {
        "use strict";
        var e = document.querySelectorAll(".needs-validation");
        Array.prototype.slice.call(e).forEach(function (c) {
            c.addEventListener(
                "submit",
                function (e) {
                    var a, t, n, s, i, r, o, l;
                    c.checkValidity()
                        ? (e.preventDefault(),
                          (a = document.getElementById("contact-img").src),
                          (t = document.getElementById("name").value),
                          (n = document.getElementById("email").value),
                          (s = document.getElementById("phoneNumber").value),
                          (i = document.getElementById("country").value),
                          (r = document.getElementById("label").value),
                          "" === t || "" === n || "" === s || "" === i || editlist || ((o = findNextId()), contactData.push({ id: o, user: { img: a, name: t }, email: n, phone: s, country: i, label: r }), sortElementsById()),
                          "" !== t &&
                              "" !== n &&
                              "" !== s &&
                              "" !== i &&
                              editlist &&
                              ((l = 0),
                              (l = document.getElementById("contactid-input").value),
                              (contactData = contactData.map(function (e) {
                                  return e.id == l ? { id: l, user: { img: a, name: t }, email: n, phone: s, country: i, label: r } : e;
                              })),
                              (editlist = !1)),
                          contactList.updateConfig({ data: contactData }).forceRender(),
                          document.getElementById("addContact-btnClose").click())
                        : (e.preventDefault(), e.stopPropagation()),
                        c.classList.add("was-validated");
                },
                !1
            );
        });
    })(),
    Array.from(document.querySelectorAll(".addContact-modal")).forEach(function (e) {
        e.addEventListener("click", function (e) {
            (document.getElementById("addContactModalLabel").innerHTML = "Add Contact"),
                (document.getElementById("addNewContact").innerHTML = "Add Contact"),
                (document.getElementById("name").value = ""),
                (document.getElementById("email").value = ""),
                (document.getElementById("phoneNumber").value = ""),
                (document.getElementById("country").value = ""),
                (document.getElementById("label").value = ""),
                (document.getElementById("contact-img").src = "assets/images/users/user-dummy-img.jpg"),
                document.getElementById("contactlist-form").classList.remove("was-validated");
        });
    });
var searchProductList = document.getElementById("searchResultList");
searchProductList.addEventListener("keyup", function () {
    var e = searchProductList.value.toLowerCase();
    a = e;
    var a,
        e = contactData.filter(function (e) {
            return (
                -1 !== e.user.name.toLowerCase().indexOf(a.toLowerCase()) ||
                -1 !== e.email.toLowerCase().indexOf(a.toLowerCase()) ||
                -1 !== e.phone.toLowerCase().indexOf(a.toLowerCase()) ||
                -1 !== e.country.toLowerCase().indexOf(a.toLowerCase()) ||
                -1 !== e.label.toLowerCase().indexOf(a.toLowerCase())
            );
        });
    contactList.updateConfig({ data: e }).forceRender();
}),
    Array.from(document.querySelectorAll(".contact-menu-list a")).forEach(function (n) {
        n.addEventListener("click", function () {
            n.querySelector(".menu-list-link").hasAttribute("data-tab")
                ? (e = "all" != (a = n.querySelector(".menu-list-link").getAttribute("data-tab")) ? contactData.filter((e) => e.tab === a) : contactData)
                : n.querySelector(".menu-list-link").hasAttribute("data-label") && ((a = n.querySelector(".menu-list-link").getAttribute("data-label")), (e = contactData.filter((e) => e.label === a)));
            var a,
                e,
                t = document.querySelector(".contact-menu-list a.active");
            t && t.classList.remove("active"), n.classList.add("active"), contactList.updateConfig({ data: e }).forceRender();
        });
    });
