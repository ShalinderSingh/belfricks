const useFormValidation = (formData, setFormErrors) => {

    const validateForm = () => {

        const newErrors = {};

        const nameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        if (!formData.username.match(nameRegex)) {
            newErrors.username = 'please fill username';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.match(emailRegex)) {
            newErrors.email = 'Invalid email address.';
        }
        const genderRegex = /^(?:m|M|male|Male|f|F|female|Female|o|O|other|Other)$/
        if (!formData.gender.match(genderRegex)) {
            newErrors.gender = 'please select gender';
        }

        const phoneRegex = /^([0|\+[1-9]{1,5})?([0-9]{10})$/
        if (!formData.phoneNumber.match(phoneRegex)) {
            newErrors.phoneNumber = 'invlid phone Number';
        }

        if (!formData.country) {
            newErrors.country = 'please select a country';
        }
        if (!formData.address) {
            newErrors.address = 'please fill address';
        }
        if (!formData.publicAddress) {
            newErrors.publicAddress = 'please fill publicAddress';
        }

        setFormErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    return { validateForm };

};

export default useFormValidation;