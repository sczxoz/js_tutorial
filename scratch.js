// Return array containing username and domain of an email address.

function emailParts(emailAddress) {
  return emailAddress.toLowerCase().split("@");
}