import { Address } from '@/_types/me'

export const AddressFilter = (address: Address): string | null => {
    if (address != null) {
        return `
            ${address.streetName || null} ${address.houseNumber || null},
            ${address.city || null} ${address.postalCode || null}, ${address.region || null}
        `
    }
    return null
}
export const PhoneFilter = (phoneNumber: string | null): string | null => {
    if (phoneNumber != null) {
        const escapePhoneNumber = phoneNumber.replace(/\D/g, '')
        if (escapePhoneNumber.length === 10) {
            return escapePhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
        } else if (escapePhoneNumber.length === 12) {
            return escapePhoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '+$1 $2-$3-$4')
        } else if (escapePhoneNumber.length === 13) {
            return escapePhoneNumber.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, '+$1 $2-$3-$4')
        } else {
            return phoneNumber
        }
    }
    return null
}
