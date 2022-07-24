export function validateMobile(mobilenumber) {
    var regmn='^([0]+[0-9]{1,5})?([7-9][0-9]{9})$';
    var regmob = new RegExp(regmn);
    if(regmob.test(mobilenumber))
    {
        return true;
    }  else {
        return false;
    }
}