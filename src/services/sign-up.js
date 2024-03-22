import { apiConfig } from "../configs/connection";

export const addMemberService = async (payload) => {
    try {
        let headersList = {
            "content-type": "application/json"
        };

        let response = await fetch(
            `${apiConfig.base_url}/auth/signup`,
            {
                method: "POST",
                headers: headersList,
                body:JSON.stringify(payload)
            }
        );

        let data = await response.json();

        if (response.ok) {
            return true;
        } else {
            return data;
        }

    } catch (error) {
        console.error(error);
        return [];
    }
}