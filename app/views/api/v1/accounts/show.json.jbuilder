json.partial! 'api/v1/models/account', formats: [:json], resource: @account
json.latest_nerix_version @latest_nerix_version
json.partial! 'enterprise/api/v1/accounts/partials/account', account: @account if nerixApp.enterprise?
