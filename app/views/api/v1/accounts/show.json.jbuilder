json.partial! 'api/v1/models/account', formats: [:json], resource: @account
json.latest_clord_version @latest_clord_version
json.partial! 'enterprise/api/v1/accounts/partials/account', account: @account if clordApp.enterprise?
