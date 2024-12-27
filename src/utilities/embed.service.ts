import { config } from "../config";
import { Embed } from "../interfaces/embed";

export class EmbedService {
  public async get(embedToken: string): Promise<Embed> {
    const response = await fetch(`${config.apiLocation}embeds/${embedToken}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch embed');
    }

    const payload = await response.json();

    return {
      embedToken: payload.access_token,
      domain: payload.domain,
      assistant: {
        id: payload.assistant.id,
        name: payload.assistant.name,
        companyName: payload.assistant.company_name,
        bodyColor: payload.assistant.body_color,
        textColor: payload.assistant.text_color,
        appearanceType: payload.assistant.appearance_type,
      },
    };
  }
}
