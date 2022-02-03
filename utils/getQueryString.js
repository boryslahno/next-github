

export const getQueryString = (name, language) => {

   const query = {};

   if (name) {
      query.name = name;
   }

   if (language) {
      query.language = language;
   }

   return query;
}