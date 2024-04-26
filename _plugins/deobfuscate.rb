require 'base64'

# Custom reversible transformation
def obfuscate(string)
  obfuscated = string.chars.map do |char|
    # Perform your custom transformation here
    # Example: Increment ASCII value by 1
    (char.ord * 2).chr
  end

  obfuscated.join
end

# Reverse the custom transformation
def deobfuscate(string)
  deobfuscated = string.chars.map do |char|
    # Reverse the transformation here
    # Example: Decrement ASCII value by 1
    (char.ord / 2).chr
  end

  deobfuscated.join
end

# Obfuscate and encode the string
def obfuscate_and_encode(string)
  obfuscated = obfuscate(string)
  encoded = Base64.strict_encode64(obfuscated)

  encoded
end

# Decode and deobfuscate the string
def decode_and_deobfuscate(string)
  decoded = Base64.strict_decode64(string)
  deobfuscated = deobfuscate(decoded)

  deobfuscated
end

module Jekyll
  module ObfuscateFilter
    def obfuscatefilter(input)
      obfuscated = obfuscate_and_encode(input)

      obfuscated
    end
  end

  module DeobfuscateFilter
    def deobfuscatefilter(input)
      deobfuscated = decode_and_deobfuscate(input)

      deobfuscated
    end
  end
end

Liquid::Template.register_filter(Jekyll::ObfuscateFilter)
Liquid::Template.register_filter(Jekyll::DeobfuscateFilter)
