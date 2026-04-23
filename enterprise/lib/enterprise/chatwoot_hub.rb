module Enterprise::ClordHub
  ENTERPRISE_BASE_URL = 'https://hub.2.Clord.com'.freeze

  def base_url
    return ENV.fetch('Clord_HUB_URL', ENTERPRISE_BASE_URL) if Rails.env.development?

    ENTERPRISE_BASE_URL
  end
end
