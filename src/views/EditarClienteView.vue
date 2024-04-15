<script setup>
    import {onMounted, ref, reactive } from "vue";
    import { FormKit } from '@formkit/vue';
    import ClienteService from '../services/ClienteService';
    import {useRouter, useRoute} from 'vue-router'
    import RouterLink  from '../components/UI/RouterLink.vue';
    import Heading  from '../components/UI/Heading.vue';


    const router = useRouter()
    const route = useRoute()
    const {id} = route.params

    const formData =reactive( {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        empresa: '',
        puesto: '',
    })
    onMounted(()=>{
        ClienteService.obtenerCliente(id)
            .then(({data}) =>{
                // formData.nombre = data.nombre
                // formData.apellido = data.apellido
                // formData.email = data.email
                // formData.telefono = data.telefono
                // formData.empresa = data.empresa
                // formData.puesto = data.puesto
                Object.assign(formData, data)
            })
            .catch(error => console.log('Hubo un error'))
    })

    defineProps({
        titulo:{
            type: String,
        }
    })
    
    const handleSubmit = (data) =>{
      ClienteService.actualizarCliente(id, data)
            .then(() => router.push({name: 'listado-clientes'}))
            .catch(error => console.log(error))
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
          
            <RouterLink to="listado-clientes">
                Volver
            </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">

                <FormKit
                    type="form"
                    submit-label="Guardar Cambios"
                    incomplete-message="No se pudo editar, revisar los campos"
                    @submit="handleSubmit"
                    :value="formData"
                >
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre del cliente"
                        validation="required"
                        :validation-messages="{required: 'El nombre es obligatorio'}" 
                        v-model="formData.nombre"
                    />
                    <FormKit 
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido del cliente"
                        validation="required"
                        :validation-messages="{required: 'El Apellido es obligatorio'}" 
                        v-model="formData.apellido"
                    />
                    <FormKit 
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Email del cliente"
                        validation="required|email"
                        :validation-messages="{required: 'El Email es obligatorio', email:'Email no válido'}" 
                        v-model="formData.email"
                    />
                    <FormKit 
                        type="text"
                        label="Teléfono"
                        name="telefono"
                        placeholder="Teléfono: XXX-XXX-XXXX"
                        validation="required|*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}/"
                        :validation-messages="{required: 'El Teléfono es obligatorio',matches: 'Formato no valido'}" 
                        v-model="formData.telefono"
                    />

                    <FormKit 
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Empresa del cliente"
                        v-model="formData.empresa"
                    />
                    <FormKit 
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Puesto del cliente"
                        v-model="formData.puesto"
                    />


                </FormKit>
        </div>
        </div>
    </div>
</template>

<style >
    .formkit-wrapper{
        max-width: 100%;
    }
</style>


