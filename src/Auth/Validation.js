import { FcOk } from "react-icons/fc";
const useFormValidation = (formData, setFormErrors, setIcons) => {

    const validateForm = () => {

        const newErrors = {};
        const newIcons = {}

        const nameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        if (!formData.username.match(nameRegex)) {
            newErrors.username = 'please fill username';
        } else {
            newIcons.username = <FcOk />;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.match(emailRegex)) {
            newErrors.email = 'Invalid email address.';
        } else {
            newIcons.email = <FcOk />;
        }

        const genderRegex = /^(?:m|M|male|Male|f|F|female|Female|o|O|other|Other)$/
        if (!formData.gender.match(genderRegex)) {
            newErrors.gender = 'please select gender';
        }

        const phoneRegex = /^([0|\+[1-9]{1,5})?([0-9]{10})$/
        if (!formData.phone_no.match(phoneRegex)) {
            newErrors.phone_no = 'invlid phone Number';
        } else {
            newIcons.phone_no = <FcOk />;
        }

        if (!formData.country) {
            newErrors.country = 'please select a country';
        }
        if (!formData.address) {
            newErrors.address = 'please fill address';
        } else {
            newIcons.address = <FcOk />;
        }
        if (!formData.public_address) {
            newErrors.public_address = 'please fill publicAddress';
        } else {
            newIcons.public_address = <FcOk />;
        }
        setIcons(newIcons)
        setFormErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    return { validateForm };

};

export default useFormValidation;