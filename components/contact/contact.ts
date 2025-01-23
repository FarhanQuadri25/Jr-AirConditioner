interface ContactProps {
    id?: number;
    title: string;
    name: string;
    profession: string;
    phone: string;
    email: string;
    address: string;
}

export const Contact: ContactProps[] = [
    {
        id: 1,
        title: "Ac Service and Repair center",
        name: "Syed Raza Hussain",
        profession: "Ac technician",
        phone: "+91-7995987254",
        email: "razahussain7196@gmail.com",
        address: "Shop No.16,#4-209,Ground Floor,Near Masjid,Meerpet,Hyderabad,Telangana,India"
    }
]