export default function validate(formData) {
    let errors = {}
    if (!formData.name) {
        errors.name = 'Introducir un nombre'
    }
    if (!formData.image) {
        errors.image = 'Introducir un link de una imagen'
    }
    if (!formData.type) {
        errors.type = 'Introducir el tipo'
    }
    if (formData.hp === 0) {
        errors.hp = 'Los HP deben ser mayores a 0'
    }

    return errors
}