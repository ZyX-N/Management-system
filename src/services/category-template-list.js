import { apiConfig } from "../configs/connection";

export const categoryTemplateListService = async (token) => {
    try {
        let headersList = {
            Authorization: `Bearer ${token}`,
        };

        let response = await fetch(
            `${apiConfig.base_url}/category/template/list?includeInactive=true`,
            {
                method: "GET",
                headers: headersList,
            }
        );

        let data = await response.json();

        if (response.status === 200) {
            return data;
        } else {
            return [];
        }

    } catch (error) {
        console.error(error);
        return [];
    }
}