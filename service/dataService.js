const jwt = require("jsonwebtoken")

const db = require('./db')

// const dbg=require('./dbg')





// userDetails = {

//   1000: { username: "anu", acno: 1000, password: "abc123", balance: 0, transactions: [] },
//   1001: { username: "abu", acno: 1001, password: "abc12", balance: 0, transactions: [] },
//   1002: { username: "sha", acno: 1002, password: "abc132", balance: 0, transactions: [] },
//   1003: { username: "subin", acno: 1003, password: "abc143", balance: 0, transactions: [] }
// }

sregister = (studentid, date, reason, depname) => {
  //store the resolved output of findone in a variable user
  return db.User.findOne({ studentid }).then(user => {
    // if acno present in db then get the object of that user else null response 
    if (user) {
      currentAdmin = user.admin

      user.transactions.push({
        Date: date,
        studentid,
        Depname: depname,
        Reason: reason

      })
      user.save()


      return {
        transaction: user.transactions,
        status: true,
        message: "Data updated",
        statusCode: 200,
        currentAdmin
      }

    }
    else {

      return {
        status: false,
        message: "user not present",
        statusCode: 404


      }


    }
  }
  )
}

register = (studentid, sname, psw) => {
  //store the resolved output of findone in a variable user
  return db.User.findOne({ studentid }).then(user => {
    // if acno present in db then get the object of that user else null response 
    if (user) {
      return {
        status: false,
        message: "user already present",
        statusCode: 404


      }
    }
    else {
      newUser = new db.User({
        sname,
        studentid,
        password: psw,
        balance: 0,
        admin: "Aghosh",
        transactions: []

      })
      newUser.save()
      return {
        status: true,
        message: "registered",
        statusCode: 200
      }
    }
  }
  )
}

login = (studentid, psw) => {
  return db.User.findOne({ studentid, password: psw }).then(user => {
    if (user) {
      currentUser = user.sname
      currentstudentid = studentid
      const token = jwt.sign({ studentid }, "superkey1")
      return {
        status: true,
        message: "login success",
        statusCode: 200,
        currentstudentid, currentUser, token

      }
    }
    else {
      return {
        status: false,
        message: "incorrect password or acountnumber",
        statusCode: 404


      }
    }
  }
  )

}

adminLogin = (studentid) => {
  return db.User.findOne({ studentid }).then(user => {
    if (user) {
      return {
        status: true,
        transactions: user.transactions,
        statusCode: 200
      }
    }
  })
}


// if (acno in userDetails) {
//   if (psw == userDetails[acno]["password"]) {
//     //store currentUser
//     currentUser = userDetails[acno]["username"]
//     currentAcno = acno
//     //token create
//     const token = jwt.sign({ acno }, "superkey1")
//     return {
//       status: true,
//       message: "login success",
//       statusCode: 200,
//       currentAcno,
//       currentUser, token
//     }
//   }
//   else {
//     return {
//       status: false,
//       message: "incorrect password",
//       statusCode: 404


//     }

//   }
// }
// else {
//   return {
//     status: false,
//     message: "user not registered",
//     statusCode: 404


//   }
// }




// deposit = (studentid, date, reason,depname) => {
// //   amount = parseInt(amnt)
//   return db.User.findOne({ studentid }).then(user => {
//     if (user) {
// //   user.balance += amount

//       // add transaction data
//       user.transactions.push(
//         {
//           Type: "Credit",
//           Date: date,
//           Reason:reason,
//           Depname:depname
//         }
//       )
//       user.save()
//       return {
//         status: true,
//         message: `your ac has been applied for leave`,
//         statusCode: 200
//       }
//     }
//     else {
//       return {
//         status: false,
//         message: "incorrect password or acno",
//         statusCode: 404


//       }
//     }
//   }
//   )
// }


// withdrow = (acno, psw, amnt) => {
//   amount = parseInt(amnt)
// return db.User.findOne({acno,password:psw}).then(user=>{
//   if (user) {
//     if (user.balance >=amount) {
//       if (user.balance -=amount) {

//         // add transaction

//         user.transactions.push(
//           {
//             Type: "Debit",
//             Amount: amount
//           }
//         )
// user.save()


//         return {
//           status: true,
//           message: `your ac has been debited with amount ${amount} and the balance is ${user.balance}`,
//           statusCode: 200
//         }
//       }
//       else {
//         return {
//           status: false,
//           message: "insufficient balance",
//           statusCode: 404


//         }
//       }
//     }
//     else {
//       return {
//         status: false,
//         message: "incorrect password",
//         statusCode: 404


//       }
//     }
//   }
//   return {
//     status: false,
//     message: "incorrect acno",
//     statusCode: 404

//   }


// })}

// getTransaction = (acno) => {

//   return db.User.findOne({acno}).then(user=>{
//   return {
//     status: true,
//     transaction: user.transactions,
//     statusCode: 200
//   }
// })}


// deleteAcc =(acno)=>{

// return db.User.deleteOne({acno}).then(user=>{
// if (user) {
//   return{
//     status:true,
//     message:"ac deleted",
//     statusCode:200
//   }
// }
// else{
//   return{
//     status:false,
//     message:"ac not present",
//     statusCode:401
//   }
// }

// })

// }

view = (studenti) => {

  return db.Suber.findOne({ studenti }).then(user => {
    if (user) {
      if (user.accepted == "accepted") {
        return {
          status: true,
          message: "application is accepted ",
          statusCode: 200,

        }
      }
    }
  })


}










accept = (studenti) => {
  return db.Suber.findOne({ studenti }).then(user => {


    if (user) {
      user.accepted = "accepted"
      user.save()
      return {

        status: true,
        message: "application accepted",
        statusCode: 200




      }
    }
    else{
      return {

        status: false,
        message: "application reject",
        statusCode: 404




      }
    }


  })
}





registe = (Date, studenti, Depname, Reason) => {
  //store the resolved output of findone in a variable user
  return db.Suber.findOne({ studenti }).then(user => {
    // if acno present in db then get the object of that user else null response 
    if (user) {
      return {
        status: false,
        message: "user already present",
        statusCode: 404


      }
    }
    else {
      newSuber = new db.Suber({
        Date,
        studenti,
        Depname,
        Reason
      })
      newSuber.save()
      return {
        status: true,
        message: "registered",
        statusCode: 200
      }
    }
  }
  )
}



reci = () => {
  return db.Suber.find({}).then(suber => {
    console.log(suber);
    if (suber) {
      // currentDate= suber.Date
      // currentid= suber.studenti
      // currentDepname=suber.Depname
      // currentReason=suber.Reason


      // currentstudentid = studentid
      // const token = jwt.sign({ studentid}, "superkey1")
      return {
        status: true,
        message: "login success",
        statusCode: 200,
        suber
        // currentDate,
        // currentid,
        // currentDepname,
        // currentReason
      }
    }

    else {
      return {
        status: false,
        message: "incorrect password or acountnumber",
        statusCode: 404


      }
    }
  }
  )

}

deleteAcc = (acno) => {

  return db.User.deleteOne({ acno }).then(user => {
    if (user) {
      return {
        status: true,
        message: "ac deleted",
        statusCode: 200
      }
    }
    else {
      return {
        status: false,
        message: "ac not present",
        statusCode: 401
      }
    }

  })

}


deleteAcc = (studenti) => {

  return db.Suber.deleteOne({ studenti }).then(suber => {
    if (suber) {
      return {
        status: true,
        message: "ac deleted",
        statusCode: 200
      }
    }
    else {
      return {
        status: false,
        message: "ac not present",
        statusCode: 401
      }
    }

  })

}



module.exports = {
  register, login, sregister, adminLogin, registe, reci, deleteAcc, view, accept
}