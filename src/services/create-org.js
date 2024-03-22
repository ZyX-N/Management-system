import { apiConfig } from "../configs/connection";

export const createOrgService = async (token, payload) => {
    try {
        let headersList = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };

        let response = await fetch(
            `${apiConfig.base_url}/organization`,
            {
                method: "POST",
                headers: headersList,
                body: JSON.stringify(payload)
            }
        );

        if (response.status === 201) {
            return true;
        } else {
            let data = await response.json();
            return data;
        }

    } catch (error) {
        console.error(error);
        return [];
    }
}