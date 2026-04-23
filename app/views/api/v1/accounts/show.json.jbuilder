json.partial! 'api/v1/models/account', formats: [:json], resource: @account
json.latest_Clord_version @latest_Clord_version
json.partial! 'enterprise/api/v1/accounts/partials/account', account: @account if ClordApp.enterprise?
