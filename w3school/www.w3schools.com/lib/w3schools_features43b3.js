function displayInternalFeatures() {
  var internalFeatureRnd = Math.floor(Math.random() * (5 - 1)) + 1;
  function addTryitSpaces(subject,spacesurl) {
    let spacesButt = document.createElement("a");
    let ribb = document.createElement("span");
    spacesButt.innerHTML="Get your own " + subject + " Server"
    spacesButt.classList.add("ws-black", "ws-hover-black", "spaces-tryit", "ga-featured");
    spacesButt.href=spacesurl;
    spacesButt.setAttribute("title", "W3Schools Spaces");
    spacesButt.setAttribute("target", "_blank");

    var tryits = document.getElementsByClassName("w3-example");
    for (var i = 0; i < tryits.length; i++) {
      if (tryits[i].firstElementChild.nodeName == "H3") {
        tryits[i].firstElementChild.appendChild(spacesButt.cloneNode(true));
        break;
      }
    }
  }

  var upimgsubject1 = "";
  var uplink1 = "https://campus.w3schools.com/products/w3schools-full-access-course";
  var upclass1 = "ga-top-fa-jun24";
  var upimgstart1 = "/images/img_falilla_up_";
  var upimgend1 = ".webp";
  var upimgsubject2 = "";
  var uplink2 = "https://campus.w3schools.com/collections/course-catalog";
  var upclass2 = "ga-top-course-jun24";
  var upimgstart2 = "/images/img_kurs_up_";
  var upimgend2 = ".webp";
  var upimgsubject3 = "";
  var uplink3 = "https://campus.w3schools.com/collections/certifications";
  var upclass3 = "ga-top-cert-jun24";
  var upimgstart3 = "/images/img_cert_up_";
  var upimgend3 = ".webp";
  var upimgsubject4 = "";
  var uplink4 = "https://campus.w3schools.com/collections/package-deals";
  var upclass4 = "ga-top-program-jun24";
  var upimgstart4 = "/images/img_program_up_";
  var upimgend4 = ".webp";

  var upshowcase120 = document.getElementById("upperfeatureshowcase120");
  var upshowcase160 = document.getElementById("upperfeatureshowcase160");
  var upshowcase300 = document.getElementById("upperfeatureshowcase300");
  var upshowcase3001 = document.getElementById("upperfeatureshowcase3001");
  var upshowcaselink = document.getElementById("upperfeatureshowcaselink");

  switch (subjectFolder) {
    case "accessibility":
      upimgsubject2 = "accessibility_";
      uplink2 = "https://campus.w3schools.com/products/accessibility-course";
      upclass2 = "ga-top-course-accessibility-jun24";
      break;
    case "angular":
      upimgsubject3 = "angular_";
      uplink3 = "https://campus.w3schools.com/products/angularjs-certificate";
      upclass3 = "ga-top-cert-angular-jun24";
      break;
    case "asp":
      upimgsubject3 = "asp_";
      uplink3 = "https://campus.w3schools.com/products/asp-certificate";
      upclass3 = "ga-top-cert-asp-jun24";
      break;
    case "aws":
      break;
    case "bootstrap":
      upimgsubject2 = "bootstrap3_";
      uplink2 = "https://campus.w3schools.com/products/bootstrap-course";
      upclass2 = "ga-top-course-bootstrap3-jun24";
      upimgsubject4 = "webdesign_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/learn-web-design";
      upclass4 = "ga-top-program-webdesign-jun24";
      break;
    case "bootstrap4":
      upimgsubject4 = "webdesign_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/learn-web-design";
      upclass4 = "ga-top-program-webdesign-jun24";
      break;
    case "bootstrap5":
      upimgsubject3 = "bootstrap5_";
      uplink3 = "https://campus.w3schools.com/products/bootstrap-5-certificate";
      upclass3 = "ga-top-cert-bootstrap5-jun24";
      upimgsubject4 = "webdesign_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/learn-web-design";
      upclass4 = "ga-top-program-webdesign-jun24";
      break;
    case "c":
      upimgsubject3 = "c_";
      uplink3 = "https://campus.w3schools.com/products/c-certification-exam";
      upclass3 = "ga-top-cert-c-jun24";
      break;
    case "cpp":
      upimgsubject2 = "cpp_";
      uplink2 = "https://campus.w3schools.com/products/c-course-1";
      upclass2 = "ga-top-course-cpp-jun24";
      break;
    case "cs":
      upimgsubject2 = "cs_";
      uplink2 = "https://campus.w3schools.com/products/c-course";
      upclass2 = "ga-top-course-cs-jun24";
      addTryitSpaces("C#","/cs/cs_server.php");
      break;
    case "css":
      upimgsubject2 = "css_";
      uplink2 = "https://campus.w3schools.com/products/css-course";
      upclass2 = "ga-top-course-css-jun24";
      upimgsubject4 = "frontend_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/front-end-course";
      upclass4 = "ga-top-program-frontend-jun24";
      break;
    case "cssref":
      upimgsubject2 = "css_";
      uplink2 = "https://campus.w3schools.com/products/css-course?_pos=2&_psq=css&_ss=e&_v=1.0";
      upclass2 = "ga-top-course-css-jun24";
      upimgsubject4 = "frontend_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/front-end-course";
      upclass4 = "ga-top-program-frontend-jun24";
      break;
    case "cybersecurity":
      upimgsubject2 = "cybersecurity_";
      uplink2 = "https://campus.w3schools.com/products/cyber-security-course";
      upclass2 = "ga-top-course-cybersecurity-jun24";
      break;
    case "datascience":
      upimgsubject3 = "datascience_";
      uplink3 = "https://campus.w3schools.com/products/data-science-certificate";
      upclass3 = "ga-top-cert-datascience-jun24";
      break;
    case "django":
      upimgsubject3 = "django_";
      uplink3 = "https://campus.w3schools.com/products/django-certification-exam";
      upclass3 = "ga-top-cert-django-jun24";
      addTryitSpaces("Django","/django/django_server.php");
      break;
    case "dsa":
      upimgsubject3 = "dsa_";
      uplink3 = "https://campus.w3schools.com/products/dsa-certification-exam";
      upclass3 = "ga-top-cert-dsa-jun24";
      break;
    case "excel":
      upimgsubject3 = "excel_";
      uplink3 = "https://campus.w3schools.com/products/excel-certificate";
      upclass3 = "ga-top-cert-excel-jun24";
      break;
    case "git":
      upimgsubject3 = "git_";
      uplink3 = "https://campus.w3schools.com/products/git-certificate";
      upclass3 = "ga-top-cert-git-jun24";
      break;
    case "go":
      break;
    case "html":
      upimgsubject2 = "html_";
      uplink2 = "https://campus.w3schools.com/products/html-course";
      upclass2 = "ga-top-course-html-jun24";
      upimgsubject4 = "frontend_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/front-end-course";
      upclass4 = "ga-top-program-frontend-jun24";
      break;
    case "java":
      upimgsubject2 = "java_";
      uplink2 = "https://campus.w3schools.com/products/java-course";
      upclass2 = "ga-top-course-java-jun24";
      addTryitSpaces("Java","/java/java_server.asp");
      break;
    case "jquery":
      upimgsubject2 = "jquery_";
      uplink2 = "https://campus.w3schools.com/products/jquery-course";
      upclass2 = "ga-top-course-jquery-jun24";
      break;
    case "js":
      upimgsubject2 = "javascript_";
      uplink2 = "https://campus.w3schools.com/products/javascript-course";
      upclass2 = "ga-top-course-javascript-jun24";
      upimgsubject4 = "frontend_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/front-end-course";
      upclass4 = "ga-top-program-frontend-jun24";
      break;
    case "jsref":
      upimgsubject4 = "frontend_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/front-end-course";
      upclass4 = "ga-top-program-frontend-jun24";
      break;
    case "kotlin":
      upimgsubject3 = "kotlin_";
      uplink3 = "https://campus.w3schools.com/collections/certifications/products/kotin-certificate";
      upclass3 = "ga-top-cert-kotlin-jun24";
      break;
    case "mongodb":
      upimgsubject3 = "mongodb_";
      uplink3 = "https://campus.w3schools.com/products/mongodb-certificate";
      upclass3 = "ga-top-cert-mongodb-jun24";
      break;
    case "mysql":
      upimgsubject3 = "mysql_";
      uplink3 = "https://campus.w3schools.com/products/mysql-certificate";
      upclass3 = "ga-top-cert-mysql-jun24";
      upimgsubject4 = "webapplication_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/web-application-development-course";
      upclass4 = "ga-top-program-application-jun24";
      addTryitSpaces("SQL","/sql/sql_server.asp");
      break;
    case "nodejs":
      upimgsubject3 = "nodejs_";
      uplink3 = "https://campus.w3schools.com/products/nodejs-certificate";
      upclass3 = "ga-top-cert-nodejs-jun24";
      addTryitSpaces("Node.js","/nodejs/nodejs_server.asp");
      break; 
    case "numpy":
      upimgsubject2 = "numpy_";
      uplink2 = "https://campus.w3schools.com/products/numpy-course";
      upclass2 = "ga-top-course-numpy-jun24";
      upimgsubject4 = "dataanalytics_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/data-analytics-program";
      upclass4 = "ga-top-program-dataanalytics-jun24";
      addTryitSpaces("Python","/python/python_server.asp");
      break;
    case "pandas":
      upimgsubject2 = "pandas_";
      uplink2 = "https://campus.w3schools.com/products/pandas-course";
      upclass2 = "ga-top-course-pandas-jun24";
      upimgsubject4 = "dataanalytics_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/data-analytics-program";
      upclass4 = "ga-top-program-dataanalytics-jun24";
      addTryitSpaces("Python","/python/python_server.asp");
      break;
    case "php":
      upimgsubject2 = "php_";
      uplink2 = "https://campus.w3schools.com/products/php-course";
      upclass2 = "ga-top-course-php-jun24";
      upimgsubject4 = "webapplication_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/web-application-development-course";
      upclass4 = "ga-top-program-application-jun24";
      addTryitSpaces("PHP","/php/php_server.asp");
      break;
    case "postgresql":
      upimgsubject3 = "postgresql_";
      uplink3 = "https://campus.w3schools.com/products/postgresql-certificate";
      upclass3 = "ga-top-cert-postgresql-jun24";
      break;
    case "r":
      upimgsubject2 = "r_";
      uplink2 = "https://campus.w3schools.com/products/r-course";
      upclass2 = "ga-top-course-r-jun24";
      upimgsubject4 = "dataanalytics_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/data-analytics-program";
      upclass4 = "ga-top-program-dataanalytics-jun24";
      break;
    case "react":
      upimgsubject2 = "reactjs_";
      uplink2 = "https://campus.w3schools.com/products/react-js-course";
      upclass2 = "ga-top-course-reactjs-jun24";
      upimgsubject4 = "modernweb_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/learn-modern-web-development";
      upclass4 = "ga-top-program-modernweb-jun24";
      addTryitSpaces("React.js","/react/react_server.asp");
      break;
    case "sass":
      upimgsubject3 = "sass_";
      uplink3 = "https://campus.w3schools.com/products/sass-certificate";
      upclass3 = "ga-top-cert-sass-jun24";
      break;
    case "scipy":
      upimgsubject3 = "scipy_";
      uplink3 = "https://campus.w3schools.com/products/scipy-certificate";
      upclass3 = "ga-top-cert-scipy-jun24";
      addTryitSpaces("Python","/python/python_server.asp");
      break;
    case "sql":
      upimgsubject2 = "sql_";
      uplink2 = "https://campus.w3schools.com/products/sql-course";
      upclass2 = "ga-top-course-sql-jun24";
      upimgsubject4 = "dataanalytics_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/data-analytics-program";
      upclass4 = "ga-top-program-dataanalytics-jun24";
      addTryitSpaces("SQL","/sql/sql_server.asp");
      break;
    case "statistics":
      upimgsubject3 = "statistics_";
      uplink3 = "https://campus.w3schools.com/products/statistics-certificate";
      upclass3 = "ga-top-cert-statistics-jun24";
      addTryitSpaces("Python","/python/python_server.asp");
      break;
    case "tags":
      upimgsubject2 = "html_";
      uplink2 = "https://campus.w3schools.com/products/html-course";
      upclass2 = "ga-top-course-html-jun24";
      upimgsubject4 = "frontend_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/front-end-course";
      upclass4 = "ga-top-program-frontend-jun24";
      break;
    case "typescript":
      upimgsubject2 = "typescript_";
      uplink2 = "https://campus.w3schools.com/products/learn-typescript";
      upclass2 = "ga-top-course-typescript-jun24";
      upimgsubject4 = "modernweb_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/learn-modern-web-development";
      upclass4 = "ga-top-program-modernweb-jun24";
      addTryitSpaces("TypeScript","/spaces/");
      break;
    case "vue":
      upimgsubject3 = "vuejs_";
      uplink3 = "https://campus.w3schools.com/products/vue-js-certification-exam";
      upclass3 = "ga-top-cert-vuejs-jun24";
      addTryitSpaces("Vue","/vue/vue_server.php");
      break;
    case "w3css":
      break;
    case "xml":
      upimgsubject2 = "xml_";
      uplink2 = "https://campus.w3schools.com/products/xml-course";
      upclass2 = "ga-top-course-xml-jun24";
      break;
    case "python":
      upimgsubject2 = "python_";
      uplink2 = "https://campus.w3schools.com/products/python-course";
      upclass2 = "ga-top-course-python-jun24";
      upimgsubject4 = "dataanalytics_";
      uplink4 = "https://campus.w3schools.com/collections/package-deals/products/data-analytics-program";
      upclass4 = "ga-top-program-dataanalytics-jun24";
      addTryitSpaces("Python","/python/python_server.asp");
      break;
    default:
      upimgsubject1 = "";
      upimgsubject2 = "";
      upimgsubject3 = "";
      upimgsubject4 = "";
      loimgsubject1 = "";
      loimgsubject2 = "";
      loimgsubject3 = "";
      loimgsubject4 = "";
  }

  upshowcaselink.classList.remove("ga-top-fa-jun24");
    if (internalFeatureRnd == 1) {
    upshowcase120.srcset = upimgstart1 + upimgsubject1 + "120" + upimgend1;
    upshowcase160.srcset = upimgstart1 + upimgsubject1 + "160" + upimgend1;
    upshowcase300.src = upimgstart1 + upimgsubject1 + "300" + ".png";
    upshowcase3001.srcset = upimgstart1 + upimgsubject1 + "300" + upimgend1;
    upshowcaselink.href = uplink1;
    upshowcaselink.classList.add(upclass1);
  } else if (internalFeatureRnd == 2) {
    upshowcase120.srcset = upimgstart2 + upimgsubject2 + "120" + upimgend2;
    upshowcase160.srcset = upimgstart2 + upimgsubject2 + "160" + upimgend2;
    upshowcase300.src = upimgstart2 + upimgsubject2 + "300" + ".png";
    upshowcase3001.srcset = upimgstart2 + upimgsubject2 + "300" + upimgend2;
    upshowcaselink.href = uplink2;
    upshowcaselink.classList.add(upclass2);
  } else if (internalFeatureRnd == 3) {
    upshowcase120.srcset = upimgstart3 + upimgsubject3 + "120" + upimgend3;
    upshowcase160.srcset = upimgstart3 + upimgsubject3 + "160" + upimgend3;
    upshowcase300.src = upimgstart3 + upimgsubject3 + "300" + ".png";
    upshowcase3001.srcset = upimgstart3 + upimgsubject3 + "300" + upimgend3;
    upshowcaselink.href = uplink3;
    upshowcaselink.classList.add(upclass3);
  } else if (internalFeatureRnd == 4) {
    upshowcase120.srcset = upimgstart4 + upimgsubject4 + "120" + upimgend4;
    upshowcase160.srcset = upimgstart4 + upimgsubject4 + "160" + upimgend4;
    upshowcase300.src = upimgstart4 + upimgsubject4 + "300" + ".png";
    upshowcase3001.srcset = upimgstart4 + upimgsubject4 + "300" + upimgend4;
    upshowcaselink.href = uplink4;
    upshowcaselink.classList.add(upclass4);
  }
}