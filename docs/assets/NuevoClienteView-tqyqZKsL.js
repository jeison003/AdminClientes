import{u as c,c as u,a as i,b as e,w as s,_ as p,H as b,d as a,C as h,o as _,e as r,t as v,F as l}from"./index-CbVoZ4IZ.js";const f={class:"flex justify-end"},g={class:"mx-auto mt-10 bg-white shadow"},x={class:"mx-auto md:w-2/3 py-20 px-6"},E={__name:"NuevoClienteView",props:{titulo:{type:String}},setup(n){const d=c(),m=t=>{t.estado=1,h.agregarCliente(t).then(o=>{d.push({name:"listado-clientes"})}).catch(o=>console.log(o))};return(t,o)=>(_(),u("div",null,[i("div",f,[e(p,{to:"listado-clientes"},{default:s(()=>[r(" Volver ")]),_:1})]),e(b,null,{default:s(()=>[r(v(n.titulo),1)]),_:1}),i("div",g,[i("div",x,[e(a(l),{type:"form","submit-label":"Crear Cliente","incomplete-message":"No se pudo crear, revisar los campos",onSubmit:m},{default:s(()=>[e(a(l),{type:"text",label:"Nombre",name:"nombre",placeholder:"Nombre del cliente",validation:"required","validation-messages":{required:"El nombre es obligatorio"}}),e(a(l),{type:"text",label:"Apellido",name:"apellido",placeholder:"Apellido del cliente",validation:"required","validation-messages":{required:"El Apellido es obligatorio"}}),e(a(l),{type:"text",label:"Email",name:"email",placeholder:"Email del cliente",validation:"required|email","validation-messages":{required:"El Email es obligatorio",email:"Email no válido"}}),e(a(l),{type:"text",label:"Teléfono",name:"telefono",placeholder:"Teléfono: XXX-XXX-XXXX",validation:"required|*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}/","validation-messages":{required:"El Teléfono es obligatorio",matches:"Formato no valido"}}),e(a(l),{type:"text",label:"Empresa",name:"empresa",placeholder:"Empresa del cliente"}),e(a(l),{type:"text",label:"Puesto",name:"puesto",placeholder:"Puesto del cliente"})]),_:1})])])]))}};export{E as default};
