function setValueIfExists(e,t){const s=document.getElementById(e);s&&null!==t&&(s.value=t)}document.addEventListener("DOMContentLoaded",(()=>{const e=new URLSearchParams(window.location.search);if("edit"===e.get("action")){const t=e.get("id"),s=e.get("raison"),n=e.get("email"),i=e.get("phone"),o=e.get("numero"),a=e.get("rue"),l=e.get("cp"),u=e.get("ville"),c=e.get("ca"),r=e.get("employe"),f=e.get("dateProspection"),I=e.get("estInteressé"),d=document.getElementById("pageTitle");d&&(d.textContent="Modifier un enregistrement"),setValueIfExists("clientId",t),setValueIfExists("prospectId",t),setValueIfExists("raisonSociale",s),setValueIfExists("email",n),setValueIfExists("phone",i),setValueIfExists("numeroRue",o),setValueIfExists("nomRue",a),setValueIfExists("codePostal",l),setValueIfExists("ville",u),setValueIfExists("chiffreAffaire",c),setValueIfExists("nbEmploye",r),setValueIfExists("dateProspection",f),setValueIfExists("estInteressé",I)}else{const e=document.getElementById("pageTitle");e&&(e.textContent="Ajouter un enregistrement")}}));