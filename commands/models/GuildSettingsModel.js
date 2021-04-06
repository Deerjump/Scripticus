class GuildSettingsModel
{
    constructor(guildID)
    {
        this._guildID = guildID;
    } 

    async updateGuildPrefix(newPrefix)
    {
       this._guildPrefix = newPrefix;
    }

    
    async get getGuildPrefixes() {
           try {
            return this._guildPrefix;
           } catch (error) {
               return "No Prefix found";
           }
    }
}

