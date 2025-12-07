
type TAdminSettings = {
    pathName: string;
    route: string;
}

const adminSettings: TAdminSettings[] = [
    {
        pathName: "Personal Information",
        route: "/settings/personal-information"
    },
    {
        pathName: "Change Password",
        route: "/settings/change-password"
    },
    {
        pathName: "Privacy & Policy",
        route: "/settings/privacy-policy"
    },
]

export default adminSettings;