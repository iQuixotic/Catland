import axios from "axios";

// export as object that can be used in other files to communicate with back-end
export default {

    // READ all accounts from the database
    getSingleCat:(id) => {
        return axios.get('/cats/' + id);
    },

    updateSingleCat:(data) => {
        console.log("data", data);
        return axios.put('/cats/' + data._id, data)
    }
//     // READ to check for duplicate account numbers
//     // getAcctNums: () => {
//     //     console.log('API route for reading acct numbers');        
//     //     return axios.get('/admin/acctNumbers');
//     // },

//     // UPDATE the balance of one account
//     updateBalance: (data:IRoutes, id: IRoutes) => {
//         return axios.post('/admin/' + id, data);
//     },

//     // DELETE one account from database
//     removeAccount: (id: IRoutes) => {      
//         return axios.delete('/admin/' + id);
//     },

// // -------------------------------------------------------------------------

//     // CREATE one new account
//     createNewAccount: (data: IRoutes) => {     
//         return axios.put('/personal/account/new', data);
//     },
    
//     // READ and retrieve all information from one account
//     grabOneAccount: (id: IRoutes) => {        
//         return axios.get('/personal/account/' + id);
//     },

//     // UPDATE one account with a new credit/debit
//     updateOneEntry: (data: IRoutes, id: IRoutes) => {       
//         return axios.post('/personal/account/' + id, data);
//     },

//     // DELETE one credit/debit entry from one account
//     removeOneEntry: (data: IRoutes, id: IRoutes) => {     
//         return axios.post('/personal/account/cd/' + id, data);
//     },

};