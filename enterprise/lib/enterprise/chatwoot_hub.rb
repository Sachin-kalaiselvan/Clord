module Enterprise::clordHub
  ENTERPRISE_BASE_URL = 'https://hub.2.clord.com'.freeze

  def base_url
    return ENV.fetch('clord_HUB_URL', ENTERPRISE_BASE_URL) if Rails.env.development?

    ENTERPRISE_BASE_URL
  end
end
