//list /customerprofile/getofflinepayments?userId=<1>
[
    {
        paymentId:1,
        retireeName : "avdhoot",
        amount : 3423,
        date:"isostring",
        assoicationName : "ICICI Bank",
        status : "initiated | completed | rejected",
        paymentMode : "cheque | neft |upi"
    }
]


//get by id /customerprofile/offlinepayment/:id
return {   
    paymentMode : {id:1, name : "cheque"},
    chequeDetails : {
        chequeNumber: "",
        amount: "",
        bankName: "",
        date: "",
        inFavourOf: null,
        chequePhoto: null,
      },
      neft: {
        bankName: "",
        branchName: "",
        accountNumber: "",
        accountName: "",
        ifscCode: "",
        transactionId: "",
        amount: "",
        date: "",
      },
      upi: {
        transactionNumber: "",
        amount: "",
        date: "",
      },
}
 

// post  /customerprofile/offlinepayment
{
    paymentId:1, 
    isAccepted: true | false,
    comment : "",
}