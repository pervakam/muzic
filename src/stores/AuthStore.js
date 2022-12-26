import {ref} from 'vue'
import {defineStore} from 'pinia'
import {Axios} from "@/main";
import router from "@/router";

export const useAuthStore = defineStore('auth', () => {
    const currentForm = ref('Login')
    const signInRequest = ref(null)
    const registrationArtistRequest = ref(null)
    const registrationCuratorRequest = ref(null)
    const isSignIn = ref(false)
    const isRegisteredArtist = ref(false)
    const isRegisteredCurator = ref(false)
    const userType = ref('artist')

    const setCurrentForm = (form) => {
        currentForm.value = form
    }

    const setSignInRequest = async (signInFormData) => {
        signInRequest.value = {
            email: signInFormData.email,
            password: signInFormData.password,
        }

        // ToDo убрать когда будет работать запрос
        console.log(signInRequest.value);
        isSignIn.value = true
        if(userType.value === 'artist') {
            router.push('/artist/music')
        } else if(userType.value === 'curator') {
            router.push('/profile')
        }

        try {
            await Axios.post('login/')
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const setRegistrationArtistRequest = async (registrationArtistFormData) => {
        registrationArtistRequest.value = {
            email: registrationArtistFormData.email,
            password: registrationArtistFormData.password,
        }

        // ToDo убрать когда будет работать запрос
        console.log(registrationArtistRequest.value);
        isRegisteredArtist.value = true

        try {
            await Axios.post('artist/registration/')
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const setRegistrationCuratorRequest = async (registrationCuratorFormData) => {
        registrationCuratorRequest.value = {
            type: registrationCuratorFormData.type,
            email: registrationCuratorFormData.email,
            password: registrationCuratorFormData.password,
            photo: registrationCuratorFormData.photo,
            login: registrationCuratorFormData.login,
            description: registrationCuratorFormData.description
        }

        // ToDo убрать когда будет работать запрос
        console.log(registrationCuratorRequest.value);
        isRegisteredCurator.value = true

        try {
            await Axios.post('curator/registration/')
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const logout = () => {
        isSignIn.value = false
        router.push('/')
    }

    return {
        currentForm,
        setCurrentForm,
        signInRequest,
        registrationArtistRequest,
        registrationCuratorRequest,
        setSignInRequest,
        setRegistrationArtistRequest,
        setRegistrationCuratorRequest,
        isSignIn,
        isRegisteredArtist,
        isRegisteredCurator,
        logout
    }
})
